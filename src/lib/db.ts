import { neon } from '@neondatabase/serverless';

export const pool = {
  query: async (text: string, params: any[]) => {
    const sql = neon(process.env.POSTGRES_URL!);
    const rows = await (sql as any).query(text, params);

    return rows;
  },
};
