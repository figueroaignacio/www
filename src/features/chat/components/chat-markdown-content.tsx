import { ComponentProps } from 'react';
import ReactMarkdown from 'react-markdown';

interface MarkdownContentProps {
  content: string;
}

export function ChatMarkdownContent({ content }: MarkdownContentProps) {
  return (
    <ReactMarkdown
      components={{
        h1: ({ children }) => (
          <h1 className="text-base font-bold mt-4 mb-2 text-foreground">{children}</h1>
        ),
        h2: ({ children }) => (
          <h2 className="text-sm font-bold mt-3 mb-2 text-foreground">{children}</h2>
        ),
        h3: ({ children }) => (
          <h3 className="text-sm font-semibold mt-2 mb-1 text-foreground">{children}</h3>
        ),
        p: ({ children }) => (
          <p className="mb-2 last:mb-0 text-foreground leading-relaxed">{children}</p>
        ),
        ul: ({ children }) => (
          <ul className="list-disc list-inside mb-2 space-y-1 text-foreground">{children}</ul>
        ),
        ol: ({ children }) => (
          <ol className="list-decimal list-inside mb-2 space-y-1 text-foreground">{children}</ol>
        ),
        li: ({ children }) => <li className="text-foreground">{children}</li>,
        code: ({
          inline,
          className,
          children,
          ...props
        }: ComponentProps<'code'> & { inline?: boolean }) => {
          const _match = /language-(\w+)/.exec(className || '');
          return !inline ? (
            <code
              className={`block bg-muted/50 rounded-lg p-3 mb-2 text-xs overflow-x-auto ${className ?? ''}`}
              {...props}
            >
              {children}
            </code>
          ) : (
            <code
              className="bg-muted/80 text-foreground px-1.5 py-0.5 rounded text-xs font-mono"
              {...props}
            >
              {children}
            </code>
          );
        },
        a: ({ children, href }) => (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-medium"
          >
            {children}
          </a>
        ),
        blockquote: ({ children }) => (
          <blockquote className="border-l-2 border-primary pl-3 py-1 my-2 italic text-muted-foreground">
            {children}
          </blockquote>
        ),
        hr: () => <hr className="my-3 border-border" />,
        strong: ({ children }) => (
          <strong className="font-semibold text-foreground">{children}</strong>
        ),
        em: ({ children }) => <em className="italic text-foreground">{children}</em>,
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
