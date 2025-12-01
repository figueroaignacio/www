'use client';

import { useChat } from '@/features/chat/hooks/use-chat';
import { useChatInput } from '@/features/chat/hooks/use-chat-input';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState, type RefObject } from 'react';

// Components
import { ChatToggleButton } from './chat-toggle-button';
import { ChatWindow } from './chat-window';

export function NaiChat() {
  const searchParams = useSearchParams();
  const chatParam = searchParams.get('chat');

  const [open, setOpen] = useState(false);
  const { messages, isLoading, messagesEndRef, sendMessage } = useChat();
  const { message, setMessage, handleSubmit, handleKeyPress } = useChatInput(sendMessage);

  useEffect(() => {
    if (chatParam === 'open') {
      setOpen(true);
      window.history.replaceState({}, '', window.location.pathname);
    }
  }, [chatParam]);

  const handleClose = () => setOpen(false);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <ChatToggleButton isOpen={open} onClick={() => setOpen(!open)} />
      <ChatWindow
        isOpen={open}
        messages={messages}
        isLoading={isLoading}
        messagesEndRef={messagesEndRef as RefObject<HTMLDivElement>}
        message={message}
        onMessageChange={setMessage}
        onSubmit={handleSubmit}
        onKeyPress={handleKeyPress}
        onClose={handleClose}
      />
    </div>
  );
}
