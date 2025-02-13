interface TableHeadProps {
  children: React.ReactNode;
}

export const TableHead = ({ children }: TableHeadProps) => {
  return <thead className="divide-y">{children}</thead>;
};
