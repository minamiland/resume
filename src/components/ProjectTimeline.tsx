import type { Project } from '../data/resumeData';
import TimelineRow from './TimelineRow';
import { PlatformBadge } from './PlatformBadge';

interface ProjectTimelineProps {
  projects: Project[];
  showStack: boolean;
  showRole?: boolean;
}

export default function ProjectTimeline({ projects, showStack, showRole = true }: ProjectTimelineProps) {
  return (
    <div>
      {projects.map((project, index) => (
        <TimelineRow
          key={project.period + project.name}
          period={project.period}
          variant="project"
          hideLine={index === projects.length - 1}
        >
          <div className="flex flex-wrap items-baseline gap-2.5">
            <strong className="inline-flex items-center gap-1 text-[14.5px]">
              {project.link ? (
                <a href={project.link} target="_blank" rel="noreferrer" className="underline underline-offset-2">
                  {project.name}
                </a>
              ) : (
                <span className="text-[#666]">{project.name}</span>
              )}
              {project.platform?.map((p) => (
                <PlatformBadge key={p} platform={p} />
              ))}
            </strong>
            <span className="text-[12px] text-neutral-600">{project.client}</span>
          </div>
          {showRole && <div className="mt-px text-[13px] text-neutral-700">{project.role}</div>}
          {showStack && <div className="mt-0.5 text-[12px] text-neutral-500">{project.stack.join(' · ')}</div>}
        </TimelineRow>
      ))}
    </div>
  );
}
