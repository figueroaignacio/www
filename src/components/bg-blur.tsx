export function BgBlur() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div
        className="blob1 absolute top-[10%] left-[15%] w-[600px] h-[600px] rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.3) 0%, transparent 70%)',
        }}
      />
      <div
        className="blob2 absolute top-[60%] right-[10%] w-[650px] h-[650px] rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(109, 40, 217, 0.25) 0%, transparent 70%)',
        }}
      />
      <div
        className="blob3 absolute bottom-[15%] left-[25%] w-[550px] h-[550px] rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.28) 0%, transparent 70%)',
        }}
      />
      <div
        className="blob4 absolute top-[40%] right-[30%] w-[700px] h-[700px] rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(192, 132, 252, 0.22) 0%, transparent 70%)',
        }}
      />
    </div>
  );
}
