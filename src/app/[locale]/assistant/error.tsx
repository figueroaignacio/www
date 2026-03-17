'use client';

import { Button } from '@/components/ui/button';
import { AlertCircle } from 'lucide-react';
import { useEffect } from 'react';

export default function ChatError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Chat route error:', error);
  }, [error]);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4">
      <div className="flex flex-col items-center gap-2 text-center">
        <AlertCircle className="size-10 text-destructive" />
        <h2 className="text-xl font-semibold">Chat unavailable</h2>
        <p className="max-w-md text-sm text-muted-foreground">
          There was an error loading the chat. Please try again.
        </p>
      </div>
      <Button onClick={() => reset()} variant="outline">
        Reload
      </Button>
    </div>
  );
}
