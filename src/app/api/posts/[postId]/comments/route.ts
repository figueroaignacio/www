import { pool } from '@/lib/db';
import { NextResponse } from 'next/server';

type CommentRow = {
  id: number;
  content: string;
  created_at: string;
  u_id: string;
  name: string;
  image: string | null;
};

export async function GET(request: Request, { params }: { params: Promise<{ postId: string }> }) {
  try {
    const { postId } = await params;
    const numericPostId = parseInt(postId, 10);

    const result = await pool.query(
      `SELECT
        c.id, c.content, c.created_at,
        u.id as u_id, u.name, u.image
      FROM comments c
      INNER JOIN "user" u ON c.user_id = u.id
      WHERE c.post_id = $1
      ORDER BY c.created_at DESC`,
      [numericPostId],
    );

    const comments = result.rows.map((row) => {
      const r = row as CommentRow;
      return {
        id: r.id,
        content: r.content,
        created_at: r.created_at,
        user: {
          id: r.u_id,
          name: r.name,
          image: r.image,
        },
      };
    });

    return NextResponse.json({ comments });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
