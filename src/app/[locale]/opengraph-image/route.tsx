import { ImageResponse } from 'next/og';
import type { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest, { params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  const avatarUrl = new URL('./nacho-avatar-greeting.png', import.meta.url);
  const avatarBuffer = await fetch(avatarUrl).then((res) => res.arrayBuffer());

  return new ImageResponse(
    <div
      style={{
        backgroundColor: '#040609',
        width: '100%',
        height: '100%',
        display: 'flex',
        padding: '80px',
        color: '#fff',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '32px',
          maxWidth: 1000,
        }}
      >
        <h1
          style={{
            fontSize: 72,
            margin: 0,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
          }}
        >
          {locale === 'en' ? "Hi, I'm Ignacio Figueroa" : 'Hola, soy Ignacio Figueroa'}
        </h1>
        <p
          style={{
            fontSize: 32,
            lineHeight: 1.5,
            opacity: 0.9,
          }}
        >
          {locale === 'en'
            ? 'Full Stack Developer focused on building modern, functional, and high-performance interfaces'
            : 'Desarrollador Full Stack enfocado en construir interfaces modernas, funcionales y de alto rendimiento'}
        </p>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  );
}
