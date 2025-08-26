import type { Post } from '@/api/get-posts';
import type { JSX } from 'react';

interface PostBodyRendererProps {
  body: Post['body'];
}

export function PostBodyRenderer({ body }: PostBodyRendererProps) {
  const root = body.root;

  const renderBlock = (block: any, index: number) => {
    switch (block.type) {
      case 'paragraph':
        return (
          <p key={index} className="mb-6 leading-relaxed animate-show-soft">
            {block.children.map((child: any, i: number) => renderInline(child, i))}
          </p>
        );

      case 'heading':
        const HeadingTag = `h${block.level || 2}` as keyof JSX.IntrinsicElements;
        return (
          <HeadingTag
            key={index}
            className="font-semibold tracking-tight mb-4 mt-8 animate-show-soft"
          >
            {block.children.map((child: any, i: number) => renderInline(child, i))}
          </HeadingTag>
        );

      case 'list':
        const ListTag = block.listType === 'ordered' ? 'ol' : 'ul';
        return (
          <ListTag key={index} className="mb-6 space-y-2 animate-show-soft">
            {block.children.map((item: any, i: number) => (
              <li key={i} className="leading-relaxed">
                {item.children.map((child: any, j: number) => renderInline(child, j))}
              </li>
            ))}
          </ListTag>
        );

      case 'quote':
        return (
          <blockquote
            key={index}
            className="border-l-4 border-border pl-6 my-6 italic text-muted-foreground animate-show-soft"
          >
            {block.children.map((child: any, i: number) => renderInline(child, i))}
          </blockquote>
        );

      default:
        return null;
    }
  };

  const renderInline = (child: any, index: number) => {
    if (child.type === 'text') {
      const className = '';
      const element = child.text;

      if (child.bold) {
        return (
          <strong key={index} className="font-semibold">
            {element}
          </strong>
        );
      }
      if (child.italic) {
        return (
          <em key={index} className="italic">
            {element}
          </em>
        );
      }
      if (child.code) {
        return (
          <code key={index} className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">
            {element}
          </code>
        );
      }

      return <span key={index}>{element}</span>;
    }

    if (child.type === 'link') {
      return (
        <a
          key={index}
          href={child.url}
          className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors animate-show-soft"
          target={child.url.startsWith('http') ? '_blank' : undefined}
          rel={child.url.startsWith('http') ? 'noopener noreferrer' : undefined}
        >
          {child.children.map((linkChild: any, i: number) => renderInline(linkChild, i))}
        </a>
      );
    }

    return null;
  };

  return (
    <div className="space-y-4">
      {root.children.map((block: any, index: number) => renderBlock(block, index))}
    </div>
  );
}
