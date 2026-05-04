import { MigrateDownArgs, MigrateUpArgs, sql } from '@payloadcms/db-vercel-postgres';

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "contributions" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"repository" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );

  CREATE TABLE IF NOT EXISTS "contributions_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"tech_stack_id" integer
  );

  DO $$
  BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='payload_locked_documents_rels' AND column_name='contributions_id') THEN
      ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "contributions_id" integer;
    END IF;
  END $$;

  ALTER TABLE "contributions_rels" DROP CONSTRAINT IF EXISTS "contributions_rels_parent_fk";
  ALTER TABLE "contributions_rels" ADD CONSTRAINT "contributions_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."contributions"("id") ON DELETE cascade ON UPDATE no action;

  ALTER TABLE "contributions_rels" DROP CONSTRAINT IF EXISTS "contributions_rels_tech_stack_fk";
  ALTER TABLE "contributions_rels" ADD CONSTRAINT "contributions_rels_tech_stack_fk" FOREIGN KEY ("tech_stack_id") REFERENCES "public"."tech_stack"("id") ON DELETE cascade ON UPDATE no action;

  CREATE INDEX IF NOT EXISTS "contributions_updated_at_idx" ON "contributions" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "contributions_created_at_idx" ON "contributions" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "contributions_rels_order_idx" ON "contributions_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "contributions_rels_parent_idx" ON "contributions_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "contributions_rels_path_idx" ON "contributions_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "contributions_rels_tech_stack_id_idx" ON "contributions_rels" USING btree ("tech_stack_id");

  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT IF EXISTS "payload_locked_documents_rels_contributions_fk";
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_contributions_fk" FOREIGN KEY ("contributions_id") REFERENCES "public"."contributions"("id") ON DELETE cascade ON UPDATE no action;

  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_contributions_id_idx" ON "payload_locked_documents_rels" USING btree ("contributions_id");
  `);
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    DROP TABLE IF EXISTS "contributions" CASCADE;
    DROP TABLE IF EXISTS "contributions_rels" CASCADE;
    ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "contributions_id";
  `);
}
