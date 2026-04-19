import { GitHubIcon } from '@/components/tech-icons/github-icon';
import { Dialog } from '@/components/ui/dialog';
import { MessageSquare } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  isRedirecting: boolean;
  onOpenChange: (open: boolean) => void;
  onLogin: () => void;
  t: (key: string) => string;
}

export function LoginModal({ isOpen, isRedirecting, onOpenChange, onLogin, t }: LoginModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <Dialog.Content className="sm:max-w-md bg-card border-border shadow-2xl rounded-2xl">
        <Dialog.Header className="pt-4 text-center items-center">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4 mx-auto">
            <MessageSquare className="w-6 h-6" />
          </div>
          <Dialog.Title className="text-2xl font-bold">{t('modal.title')}</Dialog.Title>
          <Dialog.Description className="mt-2 text-center text-muted-foreground">
            {t('modal.description')}
          </Dialog.Description>
        </Dialog.Header>
        <div className="flex flex-col gap-3 py-6">
          <button
            onClick={onLogin}
            disabled={isRedirecting}
            className="flex gap-2 items-center justify-center p-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 disabled:bg-muted disabled:text-muted-foreground disabled:cursor-not-allowed"
          >
            {!isRedirecting && <GitHubIcon />}
            {isRedirecting ? (
              <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
            ) : (
              t('modal.button')
            )}
          </button>
          <p className="text-[11px] text-center text-muted-foreground uppercase tracking-tighter">
            {t('modal.footer')}
          </p>
        </div>
      </Dialog.Content>
    </Dialog>
  );
}
