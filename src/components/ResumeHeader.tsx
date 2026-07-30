import type { Profile } from '../data/resumeData';

interface ResumeHeaderProps {
  profile: Profile;
}

export default function ResumeHeader({ profile }: ResumeHeaderProps) {
  return (
    <header className="flex items-end justify-between gap-6 border-b-[3px] border-text pb-[18px]">
      <div>
        <div className="mb-1.5 text-[13px] tracking-[0.18em] text-neutral-600">{profile.title}</div>
        <h1 className="m-0 font-heading text-3xl font-bold leading-[1.1]">{profile.name}</h1>
      </div>
      <div className="text-right text-[13.5px] leading-[1.7] text-neutral-700">
        <div>{profile.birthAndAddress}</div>
        <div>{profile.phoneAndEmail}</div>
        <div>
          PORTFOLIO{' '}
          <a href={profile.portfolioUrl} className="underline">
            {profile.portfolioLabel}
          </a>
        </div>
      </div>
    </header>
  );
}
