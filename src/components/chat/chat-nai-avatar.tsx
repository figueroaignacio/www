let avatar = '/images/nai-assistant.png';

export function ChatNaiAvatar() {
  return (
    <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center">
      <img src={avatar} alt="N.A.I" className="w-full object-cover" />
    </div>
  );
}
