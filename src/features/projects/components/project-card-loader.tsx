export function ProjectCardLoader() {
  return (
    <div className="flex flex-col gap-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="relative space-y-4 border-border border p-6 rounded-2xl bg-background/40 animate-pulse"
        >
          {/* Header del Proyecto: Título (h2) y Subtítulo (h3) */}
          <div className="space-y-2">
            <div className="h-6 w-1/2 bg-muted rounded-md" /> {/* Title */}
            <div className="h-4 w-1/3 bg-muted/60 rounded-md" /> {/* Subtitle */}
          </div>

          {/* Cuerpo: Descripción y Tecnologías */}
          <div className="space-y-4 pt-4">
            {/* Simulación de párrafos (description) */}
            <div className="space-y-2">
              <div className="h-4 w-full bg-muted/50 rounded-md" />
              <div className="h-4 w-[92%] bg-muted/50 rounded-md" />
            </div>

            {/* Simulación de Badges (techList) */}
            <div className="flex flex-wrap gap-2 pt-2">
              <div className="h-6 w-16 bg-muted/80 rounded-full" />
              <div className="h-6 w-20 bg-muted/80 rounded-full" />
              <div className="h-6 w-14 bg-muted/80 rounded-full" />
            </div>

            {/* Links de acción: GitHub, Demo, Detalles */}
            {/* El mt-12 es clave para mantener la misma altura que la card real */}
            <div className="flex gap-4 justify-end mt-12">
              <div className="h-4 w-16 bg-muted/40 rounded-md" />
              <div className="h-4 w-16 bg-muted/40 rounded-md" />
              <div className="h-4 w-16 bg-muted/40 rounded-md" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
