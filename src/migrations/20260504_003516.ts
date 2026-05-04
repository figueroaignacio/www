import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres';

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_contributions_locale" AS ENUM('en', 'es');
  ALTER TABLE "contributions" ADD COLUMN "locale" "enum_contributions_locale" DEFAULT 'en' NOT NULL;`);
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "contributions" DROP COLUMN "locale";
  DROP TYPE "public"."enum_contributions_locale";`);
}
