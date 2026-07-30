import type { ReactNode } from "react";

interface SectionHeadingProps {
  children: ReactNode;
  /** Bottom margin as a Tailwind class — the timelines use 20px (mb-5),
   *  the two-column 학력/자격 section uses 16px (mb-4). */
  spacingClassName?: string;
}

export default function SectionHeading({
  children,
  spacingClassName = "mb-5",
}: SectionHeadingProps) {
  return (
    <h2 className={`m-0 font-heading text-[20px] font-bold tracking-[0.06em] ${spacingClassName}`}>
      {children}
    </h2>
  );
}
