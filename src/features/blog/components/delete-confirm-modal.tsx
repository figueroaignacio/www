'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
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
      <DialogContent className="smorder-destructive/20 border-border border shadow-destructive/10">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-full bg-destructive/10 text-destructive">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <DialogTitle>{t('status.confirmDeleteTitle') || '¿Eliminar comentario?'}</DialogTitle>
          </div>
          <DialogDescription>{t('status.confirmDelete')}</DialogDescription>
        </DialogHeader>
        <DialogFooter className="mt-4 gap-2 sm:gap-0">
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
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
