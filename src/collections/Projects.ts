import { CollectionConfig } from 'payload';

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
  },
  labels: {
    singular: 'Project',
    plural: 'Projects',
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
      name: 'projectImage',
      label: 'Project Image',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'subtitle',
      label: 'Subtitle',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'body',
      label: 'Body',
      type: 'richText',
      required: true,
    },
    {
      name: 'technologies',
      label: 'Technologies Used',
      type: 'relationship',
      relationTo: 'tech-stack',
      hasMany: true,
      required: false,
    },
    {
      name: 'repository',
      label: 'GitHub Repository',
      type: 'text',
    },
    {
      name: 'demo',
      label: 'Live Demo URL',
      type: 'text',
    },
    {
      name: 'featured',
      label: 'Featured Project',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'order',
      label: 'Order',
      type: 'number',
      admin: {
        description: 'Used for custom sorting',
      },
    },
  ],
};
