import { pool } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: Promise<{ postId: string }> }) {
  try {
    const { postId } = await params;
    const numericPostId = parseInt(postId, 10);

    const rows = await pool.query(
      `SELECT 
        c.id, c.content, c.created_at,
        u.id as u_id, u.name, u.image
      FROM comments c
      INNER JOIN "user" u ON c.user_id = u.id
      WHERE c.post_id = $1
      ORDER BY c.created_at DESC`,
      [numericPostId],
    );

    const comments = (rows as any[]).map((row) => ({
      id: row.id,
      content: row.content,
      created_at: row.created_at,
      user: {
        id: row.u_id,
        name: row.name,
        image: row.image,
      },
    }));

    return NextResponse.json({ comments });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
