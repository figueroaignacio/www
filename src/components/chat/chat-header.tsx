// Hooks
import { useTranslations } from 'next-intl';

// Components
import { ChatNaiAvatar } from './chat-nai-avatar';

export function ChatHeader() {
  const t = useTranslations('components.chat.header');

  return (
    <div className="relative bg-card p-4 border-b border-border">
      <div className="relative flex items-center gap-3">
        <ChatNaiAvatar />
        <div>
          <h2 className="font-medium text-foreground">{t('title')}</h2>
          <p className="text-xs text-muted-foreground">{t('subtitle')}</p>
        </div>
        <div className="ml-auto w-2 h-2 bg-green-500 rounded-full" />
      </div>
    </div>
  );
}
