import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { ChatFloatingLink } from '@/features/chat/components/chat-floating-link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container">{children}</main>
      <Footer />
      <ChatFloatingLink />
    </div>
  );
}
