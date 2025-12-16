import { getPostBySlug } from '@/features/blog/api/posts';
import { ImageResponse } from 'next/og';
import type { NextRequest } from 'next/server';

export const runtime = 'edge';

const translations = {
  es: {
    article: 'Artículo',
    by: 'Por',
    notFound: 'Post no encontrado',
  },
  en: {
    article: 'Article',
    by: 'by',
    notFound: 'Post not found',
  },
};

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string; locale: string }> },
) {
  try {
    const { slug, locale } = await params;
    const t = translations[locale as keyof typeof translations] ?? translations.es;

    const post = await getPostBySlug(slug);

    const avatarUrl = new URL('./nacho-avatar.jpg', import.meta.url);
    const avatarBuffer = await fetch(avatarUrl).then((res) => res.arrayBuffer());

    if (!post) {
      return new ImageResponse(
        <div
          style={{
            background: '#040609',
            width: '100%',
            height: '100%',
            padding: '80px',
            color: '#ffffff',
            fontSize: 48,
            fontWeight: '600',
            fontFamily: 'system-ui, -apple-system, sans-serif',
          }}
        >
          {t.notFound}
        </div>,
        { width: 1200, height: 630 },
      );
    }

    return new ImageResponse(
      <div
        style={{
          background: '#040609',
          width: '100%',
          height: '100%',
          padding: '80px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <span
            style={{
              fontSize: 24,
              color: 'rgba(255,255,255,0.6)',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}
          >
            {t.article}
          </span>
          <h1
            style={{
              fontSize: 38,
              fontWeight: '700',
              color: '#ffffff',
              margin: 0,
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              maxWidth: 960,
            }}
          >
            {post.title}
          </h1>
          <p
            style={{
              fontSize: 32,
              color: '#a0a0a0',
              margin: 0,
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              maxWidth: 960,
            }}
          >
            {post.description}
          </p>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 20,
          }}
        >
          <img
            src={avatarBuffer as any}
            style={{
              width: 64,
              height: 64,
              borderRadius: '9999px',
              objectFit: 'cover',
              border: '2px solid rgba(255,255,255,0.15)',
            }}
          />

          <span
            style={{
              fontSize: 22,
              color: 'rgba(255,255,255,0.6)',
            }}
          >
            {t.by} Ignacio Figueroa
          </span>
        </div>
      </div>,
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
