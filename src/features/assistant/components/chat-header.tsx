import { Link } from '@/i18n/navigation';
import { ArrowLeft } from 'lucide-react';

export function ChatHeader() {
  return (
    <div className="z-40 flex items-center gap-2 justify-between w-full p-4">
      <Link href="/">
        <ArrowLeft className="w-5 h-5" />
      </Link>
    </div>
  );
}
