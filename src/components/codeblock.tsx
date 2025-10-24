'use client';

import { Highlight, themes } from 'prism-react-renderer';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export function CodeBlock({ code, language = 'typescript' }: CodeBlockProps) {
  const trimmed = code?.trim() ?? '';

  return (
    <Highlight code={trimmed} language={language} theme={themes.oneDark}>
      {({ className, tokens, getLineProps, getTokenProps }) => (
        <div className="relative my-6 w-full">
          <div className="rounded-xl bg-card border border-border overflow-x-auto max-w-full">
            <pre
              className={`${className} w-full max-w-full p-4 text-sm leading-relaxed font-mono box-border`}
              style={{ boxSizing: 'border-box' }}
            >
              <code className="block w-full max-w-full box-border">
                {tokens.map((line, i) => (
                  <div
                    key={i}
                    {...getLineProps({ line })}
                    className="flex items-start"
                    style={{ boxSizing: 'border-box' }}
                  >
                    <span className="inline-block w-8 flex-shrink-0 select-none text-right opacity-50 pr-4">
                      {i + 1}
                    </span>
                    <span className="flex-1 min-w-0 whitespace-pre">
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token })} />
                      ))}
                    </span>
                  </div>
                ))}
              </code>
            </pre>
          </div>
        </div>
      )}
    </Highlight>
  );
}
