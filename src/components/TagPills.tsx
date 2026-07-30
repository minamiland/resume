interface TagPillsProps {
  tags: string[];
}

export default function TagPills({ tags }: TagPillsProps) {
  return (
    <div className="mt-3.5 flex flex-wrap gap-1.5 text-xs text-neutral-700">
      {tags.map((tag) => (
        <span key={tag} className="border border-neutral-300 px-2.5 py-0.5 rounded-full">
          {tag}
        </span>
      ))}
    </div>
  );
}
