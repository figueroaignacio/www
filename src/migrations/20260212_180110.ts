import { MigrateDownArgs, MigrateUpArgs, sql } from '@payloadcms/db-vercel-postgres';

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "projects" ADD COLUMN IF NOT EXISTS "video_url" varchar;
   ALTER TABLE "_projects_v" ADD COLUMN IF NOT EXISTS "version_video_url" varchar;
  `);
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "projects" DROP COLUMN IF EXISTS "video_url";
   ALTER TABLE "_projects_v" DROP COLUMN IF EXISTS "version_video_url";
  `);
}
