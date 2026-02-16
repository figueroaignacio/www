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
          <h1 className="text-lg font-bold mt-4 mb-2 text-foreground tracking-tight">{children}</h1>
        ),
        h2: ({ children }) => (
          <h2 className="text-base font-bold mt-3 mb-2 text-foreground tracking-tight">
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3 className="text-sm font-semibold mt-2 mb-1 text-foreground tracking-tight">
            {children}
          </h3>
        ),
        p: ({ children }) => (
          <p className="mb-2 last:mb-0 text-foreground/90 leading-relaxed">{children}</p>
        ),
        ul: ({ children }) => (
          <ul className="list-disc list-outside ml-4 mb-2 space-y-1 text-foreground/90">
            {children}
          </ul>
        ),
        ol: ({ children }) => (
          <ol className="list-decimal list-outside ml-4 mb-2 space-y-1 text-foreground/90">
            {children}
          </ol>
        ),
        li: ({ children }) => <li className="pl-1">{children}</li>,
        code: ({
          inline,
          className,
          children,
          ...props
        }: ComponentProps<'code'> & { inline?: boolean }) => {
          const match = /language-(\w+)/.exec(className || '');
          return !inline ? (
            <code
              className={`block bg-muted/60 dark:bg-muted/30 rounded-lg p-3 my-2 text-xs overflow-x-auto font-mono text-foreground ${className ?? ''}`}
              {...props}
            >
              {children}
            </code>
          ) : (
            <code
              className="bg-muted/80 dark:bg-muted/40 text-foreground px-1 py-0.5 rounded text-xs font-mono font-medium"
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
            className="text-primary hover:text-primary/80 hover:underline font-medium transition-colors"
          >
            {children}
          </a>
        ),
        blockquote: ({ children }) => (
          <blockquote className="border-l-4 border-primary/50 pl-4 py-1 my-2 italic text-muted-foreground bg-muted/20 rounded-r-lg">
            {children}
          </blockquote>
        ),
        hr: () => <hr className="my-4 border-border/50" />,
        strong: ({ children }) => (
          <strong className="font-semibold text-foreground">{children}</strong>
        ),
        em: ({ children }) => <em className="italic text-foreground/80">{children}</em>,
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
