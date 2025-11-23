import { NextRequest, NextResponse } from 'next/server';

// Utils
import { groq, GROQ_CONFIG } from '@/lib/groq-client';
import { detectLanguage } from '@/lib/language-detector';

// Prompts
import { SYSTEM_PROMPTS } from '@/lib/prompts';

// Types
import type { Message } from '@/lib/types';

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: 'Messages array is required' }, { status: 400 });
    }

    const language = detectLanguage(messages as Message[]);
    const systemPrompt = SYSTEM_PROMPTS[language];

    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: systemPrompt,
        },
        ...messages,
      ],
      model: GROQ_CONFIG.model,
      temperature: GROQ_CONFIG.temperature,
      max_tokens: GROQ_CONFIG.maxTokens,
      top_p: GROQ_CONFIG.topP,
      stream: false,
    });

    const responseMessage =
      completion.choices[0]?.message?.content || 'Sorry, I could not generate a response.';

    return NextResponse.json({
      message: responseMessage,
    });
  } catch (error: any) {
    console.error('Groq API Error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to process chat request' },
      { status: 500 },
    );
  }
}
