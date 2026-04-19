import { Dialog } from '@/components/ui/dialog';
import { Link } from '@/i18n/navigation';
import { ArrowLeft, MessageCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface ChatHeaderProps {
  onResetChat?: () => void;
}

export function ChatHeader({ onResetChat }: ChatHeaderProps) {
  const t = useTranslations('components.chat.header');

  return (
    <div className="z-40 flex items-center gap-2 justify-between w-full p-4">
      <Link href="/">
        <ArrowLeft className="w-5 h-5" />
      </Link>
      {onResetChat && (
        <Dialog>
          <Dialog.Trigger>
            <button className="btn btn-primary" title={t('reset')}>
              <MessageCircle size={16} />
              <span className="text-sm">{t('newChat')}</span>
            </button>
          </Dialog.Trigger>
          <Dialog.Content className="bg-card">
            <Dialog.Header>
              <Dialog.Title>{t('resetConfirmTitle')}</Dialog.Title>
              <Dialog.Description>{t('resetConfirmDescription')}</Dialog.Description>
            </Dialog.Header>
            <Dialog.Footer>
              <Dialog.Close asChild>
                <button className="btn btn-outline text-center">{t('resetConfirmCancel')}</button>
              </Dialog.Close>
              <button className="btn btn-primary text-center" onClick={onResetChat}>
                {t('resetConfirmAction')}
              </button>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog>
      )}
    </div>
  );
}
