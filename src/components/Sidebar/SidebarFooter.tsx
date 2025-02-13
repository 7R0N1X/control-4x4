import { LogOut } from "lucide-react";

interface SidebarFooterProps {
  onLogOut: () => void;
}

export const SidebarFooter = ({ onLogOut }: SidebarFooterProps) => {
  return (
    <div className="border-t border-t-[#E4E4E7] p-4">
      <button
        onClick={onLogOut}
        className="group flex h-10 w-full cursor-pointer items-center gap-5 rounded-md px-4 py-2 transition-colors duration-300 hover:bg-[#f4f4f5]"
      >
        <LogOut
          size={16}
          className="text-[#52525B] group-hover:text-[#18181B]"
        />
        <span className="text-sm font-medium text-[#52525B] group-hover:text-[#18181B]">
          Cerrar Sesión
        </span>
      </button>
    </div>
  );
};
