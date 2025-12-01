// Payload
import { vercelPostgresAdapter } from '@payloadcms/db-vercel-postgres';
import { payloadCloudPlugin } from '@payloadcms/payload-cloud';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { buildConfig } from 'payload';

// Utils
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

// Collections
import { PostCategories } from './collections/Categories';
import { Education } from './collections/Education';
import { Experience } from './collections/Experience';
import { Media } from './collections/Media';
import { Posts } from './collections/Posts';
import { Projects } from './collections/Projects';
import { TechStack } from './collections/TechStack';
import { Testimonials } from './collections/Testimonials';
import { Users } from './collections/Users';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Experience,
    Education,
    Posts,
    Projects,
    Media,
    TechStack,
    PostCategories,
    Testimonials,
  ],
  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [...defaultFeatures],
  }),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: vercelPostgresAdapter({
    pool: {
      connectionString: process.env.POSTGRES_URL || '',
    },
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
});
