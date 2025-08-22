export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-2xl mx-auto px-2 py-12">
        <div className="space-y-4">
          <h2 className="font-semibold text-foreground tracking-tight">
            Ignacio Figueroa
          </h2>
          <p className="text-muted-foreground font-medium">
            Software Developer • Fullstack Developer
          </p>
          <div className="pt-8 mt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Ignacio Figueroa.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
