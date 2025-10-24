'use client';

import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical';
import { RichText as PayloadRichText } from '@payloadcms/richtext-lexical/react';
import { CodeBlock } from './codeblock';

interface CustomRichTextProps {
  data: SerializedEditorState;
  className?: string;
}

export function CustomRichText({ data, className }: CustomRichTextProps) {
  if (!data) return null;

  return (
    <PayloadRichText
      data={data}
      className={className}
      converters={({ defaultConverters }) => ({
        ...defaultConverters,
        blocks: {
          codeBlock: ({ node }: any) => {
            // ✅ Payload usa "node.fields", no "block.fields"
            const fields = node?.fields ?? {};
            const code = fields.code ?? '';
            const language = fields.language ?? 'typescript';

            console.log('🧩 Bloque recibido:', fields);

            if (!code.trim()) {
              console.warn('⚠️ Code vacío o indefinido:', fields);
              return (
                <div className="my-4 rounded-lg border border-yellow-500/40 bg-yellow-500/10 p-4 text-sm text-yellow-700">
                  ⚠️ Bloque de código vacío o sin contenido
                </div>
              );
            }

            return <CodeBlock code={code} language={language} />;
          },
        },
      })}
    />
  );
}
