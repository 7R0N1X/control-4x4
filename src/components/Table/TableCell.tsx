import { Pen, Trash } from "lucide-react";

interface TableCellProps {
  children?: React.ReactNode;
  type: "head" | "body" | "action";
  textPosition?: string;
  onDelete?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const TableCell = ({ children, type, textPosition, onDelete }: TableCellProps) => {
  if (type === "head") {
    return (
      <th className={`border-b border-[#E4E4E7] px-4 py-2 ${textPosition ? textPosition : "text-start"} text-sm font-medium whitespace-nowrap text-[#52525B] max-sm:w-full`}>
        {children}
      </th>
    );
  }

  if (type === "body") {
    return (
      <td className={`border-b border-[#E4E4E7] px-4 py-2 ${textPosition ? textPosition : "text-start"} text-sm font-normal whitespace-nowrap text-[#18181b] max-sm:w-full`}>
        {children}
      </td>
    );
  }

  if (type === "action") {
    return (
      <td className="border-b border-[#E4E4E7] px-4 py-2">
        <div className="flex justify-end gap-2">
          <button
            className="flex size-8 cursor-pointer items-center justify-center rounded-md ring ring-[#E4E4E7] transition-all duration-300 hover:bg-[#d4af371a] hover:ring-[#d4af37]"
            title="Editar"
          >
            <Pen size={16} />
          </button>
          <button
            className="flex size-8 cursor-pointer items-center justify-center rounded-md ring ring-[#E4E4E7] transition-all duration-300 hover:bg-[#ef44441a] hover:ring-[#ef4444]"
            title="Eliminar"
            onClick={onDelete}
          >
            <Trash size={16} />
          </button>
        </div>
      </td>
    );
  }
};
