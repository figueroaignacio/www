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
        <div className="relative my-6 overflow-hidden rounded-xl bg-card border-border border">
          <pre className={`${className} overflow-x-auto p-4 text-sm leading-relaxed font-mono `}>
            <code className="bg-card">
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })} className="flex">
                  <span className="inline-block w-8 select-none text-right opacity-50 pr-4">
                    {i + 1}
                  </span>
                  <span className="flex-1">
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </span>
                </div>
              ))}
            </code>
          </pre>
        </div>
      )}
    </Highlight>
  );
}
