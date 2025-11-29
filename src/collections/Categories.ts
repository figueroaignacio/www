import { CollectionConfig } from 'payload';

export const PostCategories: CollectionConfig = {
  slug: 'post-categories',
  labels: {
    singular: 'Post Category',
    plural: 'Post Categories',
  },
  admin: {
    useAsTitle: 'label',
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
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
      admin: {
        hidden: true,
      },
    },
    {
      name: 'label',
      label: 'Label',
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
    },
  ],

  hooks: {
    beforeValidate: [
      ({ data }) => {
        if (data && !data.name && data.label) {
          data.name = data.label.toLowerCase().trim();
        }
      },
    ],
  },
};
