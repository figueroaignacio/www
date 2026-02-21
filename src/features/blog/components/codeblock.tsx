'use client';

import { fontCode } from '@/lib/fonts';
import { Highlight, themes } from 'prism-react-renderer';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export function CodeBlock({ code, language = 'tsx' }: CodeBlockProps) {
  const codeString = code.trim();

  return (
    <div className="group relative my-6 w-full overflow-hidden rounded-md bg-[#1e1f20] border-border border">
      <div className="flex items-center justify-between border-b border-white/5 bg-white/2 px-4 py-2">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
            <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
            <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
          </div>
        </div>
      </div>
      <Highlight code={codeString} language={language} theme={themes.vsDark}>
        {({ className: _className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={`overflow-x-auto p-5 text-[13px] leading-relaxed ${fontCode.className}`}
            style={{ ...style, backgroundColor: 'transparent' }}
          >
            {tokens.map((line, i) => {
              const { key, ...lineProps } = getLineProps({ line, key: i });
              return (
                <div key={i} {...lineProps} className={`table-row ${lineProps.className ?? ''}`}>
                  <span className="table-cell">
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </span>
                </div>
              );
            })}
          </pre>
        )}
      </Highlight>
    </div>
  );
}
