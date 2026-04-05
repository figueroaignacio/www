import { auth } from '@/lib/auth';
import { pool } from '@/lib/db';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const session = await auth.api.getSession({ headers: await headers() });
    if (!session) return NextResponse.json({ error: 'No autorizado' }, { status: 401 });

    const { content, postId } = await request.json();

    if (!content?.trim() || !postId) {
      return NextResponse.json({ error: 'Content and postId are required' }, { status: 400 });
    }

    const numericPostId = parseInt(postId, 10);

    const result = await pool.query(
      `INSERT INTO comments (content, user_id, post_id)
       VALUES ($1, $2, $3)
       RETURNING id, content, created_at`,
      [content.trim(), session.user.id, numericPostId],
    );

    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'Failed to create comment' }, { status: 500 });
    }

    const newComment = result.rows[0];

    return NextResponse.json({
      comment: {
        ...newComment,
        user: {
          id: session.user.id,
          name: session.user.name,
          image: session.user.image,
        },
      },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
