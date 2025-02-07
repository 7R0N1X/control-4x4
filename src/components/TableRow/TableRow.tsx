interface TableRowProps {
  children: React.ReactNode;
}

export const TableRow = ({ children }: TableRowProps) => {
  return <tr className="hover:bg-gray-50">{children}</tr>;
};
