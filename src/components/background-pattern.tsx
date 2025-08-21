export function BackgroundPattern() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-muted/10" />
      <div className="absolute inset-0 bg-gradient-to-tl from-primary/[0.02] via-transparent to-secondary/[0.01]" />

      <div className="absolute top-20 left-10 w-96 h-64 bg-gradient-to-br from-primary/[0.08] via-primary/[0.03] to-transparent rounded-3xl blur-3xl transform rotate-12 animate-float-slow" />
      <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-tl from-secondary/[0.06] via-muted/[0.02] to-transparent rounded-full blur-2xl animate-float-reverse" />
      <div className="absolute bottom-32 left-1/4 w-72 h-48 bg-gradient-to-r from-muted/[0.04] via-primary/[0.02] to-transparent rounded-2xl blur-2xl transform -rotate-6 animate-float-slow" />

      <div className="absolute top-1/2 left-20 w-32 h-32 bg-gradient-to-br from-primary/[0.05] to-transparent rounded-full blur-xl animate-pulse-subtle" />
      <div className="absolute bottom-20 right-32 w-48 h-24 bg-gradient-to-l from-secondary/[0.04] to-transparent rounded-full blur-2xl animate-float-reverse" />

      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-primary/[0.03] at-30% via-transparent to-transparent animate-pulse-very-slow" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-radial from-secondary/[0.04] at-70% via-transparent to-transparent animate-pulse-very-slow" />
        <div className="absolute top-1/2 left-1/2 w-full h-full bg-gradient-radial from-muted/[0.02] via-transparent to-transparent transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-white/[0.02] backdrop-blur-3xl rounded-full border border-white/[0.08] dark:bg-white/[0.01] dark:border-white/[0.04] animate-float-slow" />
      <div className="absolute bottom-1/4 left-1/2 w-48 h-32 bg-white/[0.015] backdrop-blur-2xl rounded-2xl border border-white/[0.06] transform rotate-45 dark:bg-white/[0.008] dark:border-white/[0.03] animate-float-reverse" />
      <div className="absolute top-20 right-10 w-24 h-24 bg-white/[0.02] backdrop-blur-xl rounded-full border border-white/[0.1] dark:bg-white/[0.01] dark:border-white/[0.05] animate-pulse-subtle" /> */}

      <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-primary/20 rounded-full blur-sm animate-twinkle" />
      <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-secondary/30 rounded-full blur-sm animate-twinkle-delayed" />
      <div className="absolute top-2/3 left-2/3 w-1.5 h-1.5 bg-muted/25 rounded-full blur-sm animate-twinkle" />

      <div className="absolute inset-0 opacity-[0.008] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')] animate-pulse-very-slow" />
    </div>
  )
}
