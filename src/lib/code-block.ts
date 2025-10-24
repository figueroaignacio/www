import { Block } from 'payload';

export const CodeBlock: Block = {
  slug: 'codeBlock',
  interfaceName: 'CodeBlock',
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
      type: 'textarea',
      required: true,
      admin: {
        rows: 10,
      },
    },
  ],
};
