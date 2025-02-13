import { ChevronRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

interface NavItemProps {
  text: string;
  icon: React.ElementType;
  path: string;
  isActive?: boolean;
}

export const NavItem = ({ text, icon, path, isActive }: NavItemProps) => {
  return (
    <Link
      to={path}
      className={`flex w-full items-center justify-between rounded-lg px-3 py-2 ${isActive && "bg-[#d4af371a]"} group font-medium text-[#52525B] transition-colors hover:bg-[#FAFAFA]`}
    >
      <div
        className={`flex items-center gap-3 ${isActive && "font-medium text-[#d4af37]"} group-hover:text-[#18181B]`}
      >
        {React.createElement(icon, { className: "size-5" })}
        <span className="text-sm">{text}</span>
      </div>
      {isActive && <ChevronRight size={20} className="text-[#d4af37]" />}
    </Link>
  );
};
