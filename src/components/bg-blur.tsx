export function BgBlur() {
  return (
    <>
      <style>{`
        @keyframes float1 {
          0%, 100% {
            transform: translate(0%, 0%) scale(1);
            opacity: 0.18;
          }
          33% {
            transform: translate(12%, -8%) scale(1.1);
            opacity: 0.28;
          }
          66% {
            transform: translate(-7%, 7%) scale(0.95);
            opacity: 0.15;
          }
        }

        @keyframes float2 {
          0%, 100% {
            transform: translate(0%, 0%) scale(1);
            opacity: 0.22;
          }
          25% {
            transform: translate(-10%, 12%) scale(1.05);
            opacity: 0.12;
          }
          50% {
            transform: translate(6%, -6%) scale(1.15);
            opacity: 0.32;
          }
          75% {
            transform: translate(4%, 9%) scale(0.92);
            opacity: 0.16;
          }
        }

        @keyframes float3 {
          0%, 100% {
            transform: translate(0%, 0%) scale(1);
            opacity: 0.2;
          }
          40% {
            transform: translate(10%, 10%) scale(1.08);
            opacity: 0.3;
          }
          80% {
            transform: translate(-12%, -4%) scale(0.94);
            opacity: 0.14;
          }
        }

        @keyframes float4 {
          0%, 100% {
            transform: translate(0%, 0%) scale(1);
            opacity: 0.16;
          }
          50% {
            transform: translate(-11%, 13%) scale(1.12);
            opacity: 0.26;
          }
        }

        .blob1 {
          animation: float1 26s ease-in-out infinite;
        }

        .blob2 {
          animation: float2 32s ease-in-out infinite;
        }

        .blob3 {
          animation: float3 29s ease-in-out infinite;
        }

        .blob4 {
          animation: float4 35s ease-in-out infinite;
        }
      `}</style>

      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Blob 1 - Rosa/Rojo */}
        <div
          className="blob1 absolute top-[10%] left-[15%] w-[600px] h-[600px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(225, 29, 72, 0.3) 0%, transparent 70%)',
          }}
        />

        {/* Blob 2 - Bordo oscuro */}
        <div
          className="blob2 absolute top-[60%] right-[10%] w-[650px] h-[650px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(136, 19, 55, 0.25) 0%, transparent 70%)',
          }}
        />

        {/* Blob 3 - Magenta/Rosa fuerte */}
        <div
          className="blob3 absolute bottom-[15%] left-[25%] w-[550px] h-[550px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(190, 24, 93, 0.28) 0%, transparent 70%)',
          }}
        />

        {/* Blob 4 - Rosa claro */}
        <div
          className="blob4 absolute top-[40%] right-[30%] w-[700px] h-[700px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.22) 0%, transparent 70%)',
          }}
        />
      </div>
    </>
  );
}
