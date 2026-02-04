import { useTranslations } from 'next-intl';

interface LoadingOverlayProps {
  isVisible: boolean;
}

export function LoadingOverlay({ isVisible }: LoadingOverlayProps) {
  const t = useTranslations('components.comments');

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-1000 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
        <p className="text-sm font-medium tracking-widest uppercase animate-pulse">
          {t('overlay')}
        </p>
      </div>
    </div>
  );
}
