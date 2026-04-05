import type { Post } from '@/payload-types';

type LexicalNode = {
  type: string;
  text?: string;
  children?: LexicalNode[];
  [key: string]: unknown;
};

type LexicalBody = Pick<Post, 'body'>['body'];

export function getReadingTime(body: LexicalBody | null | undefined): number {
  if (!body?.root?.children) return 0;

  let text = '';

  const traverse = (node: LexicalNode): void => {
    if (node.text) {
      text += node.text + ' ';
    }
    if (node.children) {
      node.children.forEach(traverse);
    }
  };

  traverse(body.root as LexicalNode);

  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / 200);
  return time;
}
