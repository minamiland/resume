import type { ReactNode } from "react";
import type { DateEntry } from "../data/resumeData";
import SectionHeading from "./SectionHeading";

interface DateListSectionProps {
  title: ReactNode;
  items: DateEntry[];
}

export default function DateListSection({ title, items }: DateListSectionProps) {
  return (
    <div>
      <SectionHeading spacingClassName="mb-4">{title}</SectionHeading>
      <div className="flex flex-col gap-2.5 text-[13.5px]">
        {items.map((item) => (
          <div key={item.date + item.label}>
            <span className="tabular-nums text-neutral-600">{item.date}</span>
            &nbsp;&nbsp;{item.label}
          </div>
        ))}
      </div>
    </div>
  );
}
