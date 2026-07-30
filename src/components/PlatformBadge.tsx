import type { Platform } from '../data/resumeData';

const badgeColor: Record<Platform, string> = {
  Mobile: '#000',
  Web: '#000',
};

interface PlatformBadgeProps {
  platform: Platform;
}

export function PlatformBadge({ platform }: PlatformBadgeProps) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" role="img" aria-label={platform} className="shrink-0">
      <circle cx="7" cy="7" r="7" fill={badgeColor[platform]} />
      <text x="7" y="7" textAnchor="middle" dominantBaseline="central" fill="#fff" fontSize="10" fontWeight="700">
        {platform === 'Mobile' ? 'M' : 'P'}
      </text>
    </svg>
  );
}
