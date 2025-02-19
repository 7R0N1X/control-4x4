interface BadgeProps {
  title: string;
}

export const Badge = ({ title }: BadgeProps) => {
  return (
    <span className="inline-flex rounded-full bg-[#242424] p-1 text-xs text-[#E7C966]">
      {title}
    </span>
  );
};
