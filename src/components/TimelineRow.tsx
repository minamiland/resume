import type { ReactNode } from 'react';

interface TimelineRowProps {
  period: string;
  variant: 'career' | 'project';
  children: ReactNode;
  hideLine?: boolean;
}

export default function TimelineRow({ period, variant, children, hideLine = false }: TimelineRowProps) {
  const isCareer = variant === 'career';

  return (
    <div className="tl-item grid grid-cols-[150px_20px_1fr] gap-x-3.5">
      <div
        className={
          'tabular-nums text-right text-neutral-600 ' + (isCareer ? 'pt-0.5 text-[13px]' : 'pt-[3px] text-[12.5px]')
        }
      >
        {period}
      </div>
      <div className="flex flex-col items-center">
        {isCareer ? (
          <span className="mt-[7px] size-[9px] flex-none rounded-full bg-text" />
        ) : (
          <span className="mt-[7px] size-[7px] flex-none rounded-full border-[1.5px] border-text bg-bg" />
        )}
        {!hideLine && <span className="w-px flex-1 bg-neutral-300" />}
      </div>
      <div className={isCareer ? 'pb-[22px]' : 'pb-[18px]'}>{children}</div>
    </div>
  );
}
