import { getPostBySlug } from '@/lib/services';
import { ImageResponse } from 'next/og';
import type { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string; locale: string }> },
) {
  try {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
      return new ImageResponse(
        (
          <div
            style={{
              background: '#ffffff',
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#0f1729',
              fontSize: 48,
              fontWeight: '600',
            }}
          >
            Post not found
          </div>
        ),
        {
          width: 1200,
          height: 630,
        },
      );
    }

    const date = new Date(post.createdAt);
    const formattedDate = date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

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
              gap: '24px',
              flex: 1,
            }}
          >
            <h1
              style={{
                fontSize: 64,
                fontWeight: '700',
                color: '#0f1729',
                margin: 0,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
              }}
            >
              {post.title}
            </h1>

            {post.description && (
              <p
                style={{
                  fontSize: 28,
                  color: '#64748b',
                  margin: 0,
                  lineHeight: 1.5,
                  fontWeight: '400',
                }}
              >
                {post.description}
              </p>
            )}
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: '40px',
              borderTop: '1px solid #e2e8f0',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              <span
                style={{
                  fontSize: 24,
                  color: '#0f1729',
                  fontWeight: '600',
                }}
              >
                Ignacio Figueroa
              </span>
              <span
                style={{
                  fontSize: 20,
                  color: '#94a3b8',
                  fontWeight: '400',
                }}
              >
                {formattedDate}
              </span>
            </div>
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
