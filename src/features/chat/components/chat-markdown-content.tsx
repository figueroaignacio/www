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
          <h1 className="text-xl font-bold mt-6 mb-3 text-foreground tracking-tight border-b border-border/50 pb-2">
            {children}
          </h1>
        ),
        h2: ({ children }) => (
          <h2 className="text-lg font-bold mt-5 mb-3 text-foreground tracking-tight">{children}</h2>
        ),
        h3: ({ children }) => (
          <h3 className="text-base font-semibold mt-4 mb-2 text-foreground tracking-tight">
            {children}
          </h3>
        ),
        p: ({ children }) => (
          <p className="mb-3 last:mb-0 text-foreground/90 leading-7">{children}</p>
        ),
        ul: ({ children }) => (
          <ul className="list-disc list-outside ml-5 mb-4 space-y-2 text-foreground/90 marker:text-muted-foreground">
            {children}
          </ul>
        ),
        ol: ({ children }) => (
          <ol className="list-decimal list-outside ml-5 mb-4 space-y-2 text-foreground/90 marker:text-muted-foreground">
            {children}
          </ol>
        ),
        li: ({ children }) => <li className="pl-1 leading-7">{children}</li>,
        code: ({
          inline,
          className,
          children,
          ...props
        }: ComponentProps<'code'> & { inline?: boolean }) => {
          const match = /language-(\w+)/.exec(className || '');
          return !inline ? (
            <div className="relative my-4 rounded-lg overflow-hidden border border-border/50 bg-muted/40 dark:bg-muted/20">
              <div className="flex items-center justify-between px-4 py-2 bg-muted/60 dark:bg-muted/40 border-b border-border/50">
                <span className="text-xs font-mono text-muted-foreground">
                  {match?.[1] || 'code'}
                </span>
              </div>
              <div className="p-4 overflow-x-auto">
                <code
                  className={`block text-sm font-mono text-foreground ${className ?? ''}`}
                  {...props}
                >
                  {children}
                </code>
              </div>
            </div>
          ) : (
            <code
              className="bg-muted/60 dark:bg-muted/40 text-foreground px-1.5 py-0.5 rounded-md text-sm font-mono font-medium border border-border/30"
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
            className="text-primary hover:text-primary/80 hover:underline underline-offset-4 font-medium transition-colors"
          >
            {children}
          </a>
        ),
        blockquote: ({ children }) => (
          <blockquote className="border-l-4 border-primary/30 pl-4 py-2 my-4 italic text-muted-foreground bg-muted/10 rounded-r-lg">
            {children}
          </blockquote>
        ),
        hr: () => <hr className="my-6 border-border" />,
        strong: ({ children }) => <strong className="font-bold text-foreground">{children}</strong>,
        em: ({ children }) => <em className="italic text-foreground/80">{children}</em>,
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
