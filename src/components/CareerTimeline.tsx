import type { Career } from '../data/resumeData';
import TimelineRow from './TimelineRow';

interface CareerTimelineProps {
  careers: Career[];
}

export default function CareerTimeline({ careers }: CareerTimelineProps) {
  return (
    <div>
      {careers.map((career, index) => (
        <TimelineRow
          key={career.period + career.company}
          period={career.period}
          variant="career"
          hideLine={index === careers.length - 1}
        >
          <div className="flex flex-wrap items-baseline gap-2.5">
            <strong className="font-heading text-[16px]">{career.company}</strong>
            <span className="text-[12.5px] text-neutral-600">{career.title}</span>
          </div>
          <div className="mt-0.5 text-[13.5px] text-neutral-700">{career.duty}</div>
        </TimelineRow>
      ))}
    </div>
  );
}
