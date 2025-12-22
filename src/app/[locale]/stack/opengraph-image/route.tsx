import { ImageResponse } from 'next/og';
import type { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest, { params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  const avatarUrl = new URL('./nacho-avatar.jpg', import.meta.url);
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
          gap: '32px',
          maxWidth: 1000,
        }}
      >
        <img
          src={avatarBuffer as any}
          style={{
            width: 160,
            height: 160,
            borderRadius: '9999px',
            objectFit: 'cover',
          }}
        />
        <h1
          style={{
            fontSize: 72,
            margin: 0,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
          }}
        >
          {locale === 'en' ? 'My tech stack' : 'Mi stack de tecnologías'}
        </h1>
        <p
          style={{
            fontSize: 32,
            lineHeight: 1.5,
            opacity: 0.9,
          }}
        >
          {locale === 'en'
            ? 'Technologies I work with and focus on the most.'
            : 'Tecnologías con las que trabajo y en las que más me enfoco.'}
        </p>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  );
}
