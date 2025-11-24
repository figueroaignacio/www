import {
  TimelineContent,
  TimelineHeader,
  TimelineItem,
  TimelineList,
  TimelineListItem,
  TimelineTitle,
} from '@/components/ui/timeline';

export function ExperienceItemLoader() {
  return (
    <ul className="space-y-6">
      {Array.from({ length: 1 }).map((_, i) => (
        <li key={i} className="space-y-3">
          <TimelineItem>
            <div className="animate-pulse">
              <TimelineHeader>
                <TimelineTitle>
                  <div className="h-4 w-40 rounded-md bg-secondary/60" />
                </TimelineTitle>
              </TimelineHeader>
              <TimelineContent>
                <div className="h-3 w-24 rounded-md bg-secondary/50 mb-2" />
                <TimelineList>
                  {Array.from({ length: 4 }).map((_, idx) => (
                    <TimelineListItem key={idx}>
                      <div className="h-3 w-full rounded-md bg-secondary/40" />
                    </TimelineListItem>
                  ))}
                </TimelineList>
                <div className="flex gap-2 flex-wrap mt-3">
                  <div className="h-6 w-16 rounded-full bg-secondary/40" />
                  <div className="h-6 w-12 rounded-full bg-secondary/40" />
                </div>
              </TimelineContent>
            </div>
          </TimelineItem>
        </li>
      ))}
    </ul>
  );
}
