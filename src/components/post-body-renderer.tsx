import { Post } from '@/api/get-posts';

interface PostBodyRendererProps {
  body: Post['body'];
}

export function PostBodyRenderer({ body }: PostBodyRendererProps) {
  const root = body.root;

  return (
    <div className="prose dark:prose-invert">
      {root.children.map((block, index) => {
        if (block.type === 'paragraph') {
          return (
            <p key={index}>
              {block.children.map((child, i) => {
                if (child.type === 'text') {
                  return <span key={i}>{child.text}</span>;
                }

                return null;
              })}
            </p>
          );
        }
        return null;
      })}
    </div>
  );
}
