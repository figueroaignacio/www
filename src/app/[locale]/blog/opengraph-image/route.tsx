import { ImageResponse } from 'next/og';
import type { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest, { params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#030303',
        backgroundImage: 'radial-gradient(circle at 50% 100%, #222 0%, #000 50%)',
        color: 'white',
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '24px',
          maxWidth: 1000,
          textAlign: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(180deg, #fff 0%, rgba(255,255,255,0.7) 100%)',
            backgroundClip: 'text',
            color: 'transparent',
            fontSize: 84,
            fontWeight: 600,
            letterSpacing: '-0.04em',
            lineHeight: 1,
          }}
        >
          Blog
        </div>
        <div
          style={{
            fontSize: 36,
            color: '#888',
            letterSpacing: '-0.02em',
            fontWeight: 400,
            maxWidth: 900,
          }}
        >
          {locale === 'en'
            ? 'Discover my posts about tech, programming, AI, opinions, etc.'
            : 'Descubre mis publicaciones sobre tecnología, programación, IA, opiniones, etc.'}
        </div>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  );
}
