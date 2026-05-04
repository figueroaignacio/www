import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres';

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "contributions" ADD COLUMN "fork" varchar;
  ALTER TABLE "_contributions_v" ADD COLUMN "version_fork" varchar;`);
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "contributions" DROP COLUMN "fork";
  ALTER TABLE "_contributions_v" DROP COLUMN "version_fork";`);
}
