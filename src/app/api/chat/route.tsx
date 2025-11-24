import { NextRequest, NextResponse } from 'next/server';

// Utilities
import { groq, GROQ_CONFIG } from '@/lib/groq-client';
import { getSystemPrompt } from '@/lib/system';

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!Array.isArray(messages) || messages.some((m) => !m.role || !m.content)) {
      return NextResponse.json({ error: 'Invalid messages format' }, { status: 400 });
    }
    const sanitizedMessages = messages.slice(-10);
    const systemPrompt = getSystemPrompt(sanitizedMessages);
    const completion = await groq.chat.completions.create({
      messages: [{ role: 'system', content: systemPrompt }, ...sanitizedMessages],
      model: GROQ_CONFIG.model,
      temperature: GROQ_CONFIG.temperature,
      max_tokens: GROQ_CONFIG.maxTokens,
      top_p: GROQ_CONFIG.topP,
      stream: false,
    });

    const reply =
      completion.choices[0]?.message?.content || 'Sorry, I could not generate a response.';

    return NextResponse.json({ message: reply });
  } catch (error: any) {
    console.error('Groq API Error:', error);

    return NextResponse.json(
      { error: error.message || 'Failed to process chat request' },
      { status: 500 },
    );
  }
}
