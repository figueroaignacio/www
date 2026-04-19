'use client';

import { Button } from '@/components/ui/button';
import { Dialog } from '@/components/ui/dialog';
import { AlertTriangle, Loader2 } from 'lucide-react';

interface DeleteConfirmModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
  isDeleting: boolean;
  t: any;
}

export function DeleteConfirmModal({
  isOpen,
  onOpenChange,
  onConfirm,
  isDeleting,
  t,
}: DeleteConfirmModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <Dialog.Content className="smorder-destructive/20 border-border border shadow-destructive/10">
        <Dialog.Header>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-full bg-destructive/10 text-destructive">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <Dialog.Title>{t('status.confirmDeleteTitle') || '¿Eliminar comentario?'}</Dialog.Title>
          </div>
          <Dialog.Description>{t('status.confirmDelete')}</Dialog.Description>
        </Dialog.Header>
        <Dialog.Footer className="mt-4 gap-2 sm:gap-0">
          <Button variant="ghost" onClick={() => onOpenChange(false)} disabled={isDeleting}>
            {t('modal.cancel') || 'Cancelar'}
          </Button>
          <Button variant="destructive" onClick={onConfirm} disabled={isDeleting} className="gap-2">
            {isDeleting ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              t('button.delete') || 'Eliminar'
            )}
          </Button>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog>
  );
}
