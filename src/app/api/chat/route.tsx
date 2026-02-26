import { groq, GROQ_CONFIG } from '@/features/chat/lib/groq-client';
import { getSystemPrompt } from '@/features/chat/lib/system';
import { streamText } from 'ai';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!Array.isArray(messages) || messages.some((m) => !m.role || !m.content)) {
      return NextResponse.json({ error: 'Invalid messages format' }, { status: 400 });
    }
    const sanitizedMessages = messages.slice(-5);

    const normalizedMessages = sanitizedMessages.map((m) => ({
      role: m.role,
      content: Array.isArray(m.content)
        ? m.content.map((c: { text: string }) => c.text || '').join('\n')
        : String(m.content),
    }));

    const systemPrompt = await getSystemPrompt(normalizedMessages);

    const result = streamText({
      model: groq(GROQ_CONFIG.model),
      system: systemPrompt,
      messages: normalizedMessages as any,
      temperature: GROQ_CONFIG.temperature,
      maxOutputTokens: 800,
      topP: GROQ_CONFIG.topP,
    });

    return result.toTextStreamResponse();
  } catch (error) {
    console.error('❌ Groq API Error:', error);

    const err = error as { status?: number; message?: unknown } | undefined;

    if (
      err?.status === 413 ||
      (typeof err?.message === 'string' && err.message.includes('rate_limit_exceeded'))
    ) {
      return NextResponse.json(
        {
          error: 'The message is too long. Please try a shorter message.',
          details: 'Token limit exceeded',
        },
        { status: 413 },
      );
    }

    return NextResponse.json(
      {
        error:
          typeof err?.message === 'string'
            ? err.message
            : String(error) || 'Failed to process chat request',
      },
      { status: 500 },
    );
  }
}
