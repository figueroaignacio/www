// Types
import type { Testimonial } from '@/payload-types';

export function TestimonialCard({ name, testimonial, role }: Partial<Testimonial>) {
  return (
    <div className="border-border border rounded-2xl p-6 space-y-3">
      <div className="flex gap-x-4">
        <div>
          <h3 className="font-bold">{name}</h3>
          <span className="text-muted-foreground text-xs">{role}</span>
        </div>
      </div>
      <p className="text-muted-foreground leading-6">{testimonial}</p>
    </div>
  );
}
