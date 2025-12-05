import { ImageResponse } from 'next/og';
import type { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest, { params }: { params: Promise<{ locale: string }> }) {
  try {
    const { locale } = await params;
    const content = {
      es: {
        greeting: 'Hola, soy Ignacio Figueroa',
        description:
          'Desarrollador Full Stack enfocado en construir interfaces modernas, funcionales y de alto rendimiento',
        name: 'Ignacio Figueroa',
      },
      en: {
        greeting: "Hi, I'm Ignacio Figueroa",
        description:
          'Full Stack Developer focused on building modern, functional, and high-performance interfaces',
        name: 'Ignacio Figueroa',
      },
    };

    const t = content[locale as keyof typeof content] || content.es;

    return new ImageResponse(
      (
        <div
          style={{
            background: '#ffffff',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            padding: '80px',
            fontFamily: 'system-ui, -apple-system, sans-serif',
          }}
        >
          <div
            style={{
              width: '120px',
              height: '4px',
              background: '#3b82f6',
              marginBottom: '60px',
            }}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '32px',
              flex: 1,
              justifyContent: 'center',
            }}
          >
            <h1
              style={{
                fontSize: 72,
                fontWeight: '700',
                color: '#0f1729',
                margin: 0,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
              }}
            >
              {t.greeting}
            </h1>

            <p
              style={{
                fontSize: 32,
                color: '#64748b',
                margin: 0,
                lineHeight: 1.5,
                fontWeight: '400',
                maxWidth: '900px',
              }}
            >
              {t.description}
            </p>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (error) {
    console.error('Error generating OG image:', error);
    return new Response('Failed to generate image', { status: 500 });
  }
}
