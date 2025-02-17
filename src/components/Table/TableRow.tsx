interface TableRowProps {
  children: React.ReactNode;
  dataId?: string;
}

export const TableRow = ({ dataId, children }: TableRowProps) => {
  return (
    <tr data-id={dataId} className="hover:bg-gray-50">
      {children}
    </tr>
  );
};
