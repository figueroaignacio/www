import { CollectionConfig } from 'payload';

export const Contributions: CollectionConfig = {
  slug: 'contributions',
  admin: {
    useAsTitle: 'title',
  },
  labels: {
    singular: 'Contribution',
    plural: 'Contributions',
  },
  access: {
    read: () => true,
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
      required: true,
    },
  ],
};
