import { useState } from "react";
import {
  profile,
  summaryTags,
  careers,
  projects,
  education,
  certifications,
} from "../data/resumeData";
import ResumeHeader from "./ResumeHeader";
import TagPills from "./TagPills";
import SectionHeading from "./SectionHeading";
import CareerTimeline from "./CareerTimeline";
import ProjectTimeline from "./ProjectTimeline";
import DateListSection from "./DateListSection";
import { PlatformBadge } from "./PlatformBadge";

interface ResumeDocumentProps {
  /** Mirrors the original DC component's `compactProjects` prop: keep only the first 10 projects. */
  compactProjects?: boolean;
  /** Mirrors the original DC component's `showStack` prop: show the tech-stack line on each project. */
  showStack?: boolean;
}

export default function ResumeDocument({
  compactProjects = false,
  showStack = true,
}: ResumeDocumentProps) {
  const visibleProjects = compactProjects ? projects.slice(0, 10) : projects;
  const [viewMode, setViewMode] = useState<"simple" | "detail">("detail");

  return (
    <doc-page size="a4" margin="0.7in">
      <div className="font-body leading-[1.6] text-text">
        <ResumeHeader profile={profile} />

        <TagPills tags={summaryTags} />

        <section className="mt-11">
          <SectionHeading>경력 사항</SectionHeading>
          <CareerTimeline careers={careers} />
        </section>

        <section className="mt-[26px]">
          <div className="flex items-baseline justify-between">
            <SectionHeading>주요 프로젝트</SectionHeading>
            <div className="flex items-center gap-3 text-[11px] text-neutral-600">
              <span className="inline-flex items-center gap-1">
                <PlatformBadge platform="Web" /> Web
              </span>
              <span className="inline-flex items-center gap-1">
                <PlatformBadge platform="Mobile" /> Mobile
              </span>
              <div
                role="group"
                aria-label="프로젝트 보기 방식"
                className="inline-flex overflow-hidden rounded-full border border-neutral-300 print:hidden"
              >
                {(["simple", "detail"] as const).map((mode) => (
                  <button
                    key={mode}
                    type="button"
                    aria-pressed={viewMode === mode}
                    onClick={() => setViewMode(mode)}
                    className={`px-2.5 py-0.5 text-[11px] ${
                      viewMode === mode
                        ? "bg-text text-bg"
                        : "bg-transparent text-neutral-600"
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <ProjectTimeline
            projects={visibleProjects}
            showStack={showStack && viewMode === "detail"}
            showRole={viewMode === "detail"}
          />
        </section>

        <section className="tl-item mt-[26px] grid grid-cols-2 gap-9">
          <DateListSection title="학력" items={education} />
          <DateListSection title="자격 · 교육" items={certifications} />
        </section>
      </div>
    </doc-page>
  );
}
