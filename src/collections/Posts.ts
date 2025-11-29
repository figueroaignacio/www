import { BlocksFeature, FixedToolbarFeature, lexicalEditor } from '@payloadcms/richtext-lexical';
import { CollectionConfig } from 'payload';

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
  },
  labels: {
    singular: 'Post',
    plural: 'Posts',
  },
  access: {
    read: () => true,
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: 'locale',
      label: 'Locale',
      type: 'select',
      required: true,
      defaultValue: 'en',
      options: [
        { label: 'English', value: 'en' },
        { label: 'Spanish', value: 'es' },
      ],
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
        description: 'SEO-friendly URL (e.g., "how-to-use-payload")',
      },
    },
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'categories',
      label: 'Categories',
      type: 'relationship',
      relationTo: 'post-categories',
      hasMany: true,
      admin: {
        description: 'Select one or multiple categories for this post',
      },
      filterOptions: ({ siblingData }: { siblingData?: any }) => {
        return {
          locale: {
            equals: siblingData?.locale,
          },
        };
      },
    },
    {
      name: 'keywords',
      label: 'Keywords',
      type: 'array',
      admin: {
        description: 'SEO keywords',
      },
      fields: [
        {
          name: 'keyword',
          type: 'text',
        },
      ],
    },
    {
      name: 'body',
      label: 'Body',
      type: 'richText',
      required: true,
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          FixedToolbarFeature(),
          BlocksFeature({
            blocks: [
              {
                slug: 'codeBlock',
                labels: {
                  singular: 'Code Block',
                  plural: 'Code Blocks',
                },
                fields: [
                  {
                    name: 'language',
                    type: 'select',
                    defaultValue: 'typescript',
                    required: true,
                    options: [
                      { label: 'TypeScript', value: 'typescript' },
                      { label: 'JavaScript', value: 'javascript' },
                      { label: 'Python', value: 'python' },
                      { label: 'Java', value: 'java' },
                      { label: 'C++', value: 'cpp' },
                      { label: 'HTML', value: 'html' },
                      { label: 'CSS', value: 'css' },
                      { label: 'JSON', value: 'json' },
                      { label: 'Bash', value: 'bash' },
                      { label: 'SQL', value: 'sql' },
                      { label: 'Go', value: 'go' },
                      { label: 'Rust', value: 'rust' },
                    ],
                  },
                  {
                    name: 'code',
                    type: 'code',
                    required: true,
                    admin: {
                      language: 'typescript',
                    },
                  },
                ],
              },
            ],
          }),
        ],
      }),
    },
    {
      name: 'featured',
      label: 'Featured',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Mark this post as featured',
      },
    },
    {
      type: 'group',
      name: 'seo',
      label: 'SEO',
      admin: {
        description: 'Search engine optimization fields',
      },
      fields: [
        {
          name: 'metaTitle',
          label: 'Meta Title',
          type: 'text',
        },
        {
          name: 'metaDescription',
          label: 'Meta Description',
          type: 'textarea',
        },
      ],
    },
  ],
};
