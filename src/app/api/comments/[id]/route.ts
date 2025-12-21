import { auth } from '@/lib/auth';
import { pool } from '@/lib/db';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    const { id } = await params;

    const check = await pool.query('SELECT user_id FROM comments WHERE id = $1', [
      parseInt(id, 10),
    ]);

    if (check.rows.length === 0) {
      return NextResponse.json({ error: 'No encontrado' }, { status: 404 });
    }

    if (check.rows[0].user_id !== session.user.id) {
      return NextResponse.json({ error: 'No tienes permiso' }, { status: 403 });
    }

    await pool.query('DELETE FROM comments WHERE id = $1', [parseInt(id, 10)]);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
