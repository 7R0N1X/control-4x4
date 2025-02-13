import { ChevronRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import React from "react";

interface NavItemProps {
  text: string;
  icon: React.ElementType;
  path: string;
}

export const NavItem = ({ text, icon, path }: NavItemProps) => {
  return (
    <NavLink
      to={path}
      end={path === "/dashboard"}
      className={({ isActive }) =>
        `flex w-full items-center justify-between rounded-lg px-3 py-2 ${
          isActive ? "bg-[#d4af371a]" : "hover:bg-[#FAFAFA]"
        } group font-medium text-[#52525B] transition-colors`
      }
    >
      {({ isActive }) => (
        <>
          <div
            className={`flex items-center gap-3 ${isActive ? "font-medium text-[#d4af37]" : ""} ${!isActive && "group-hover:text-[#18181B]"}`}
          >
            {React.createElement(icon, { className: "size-5" })}
            <span className="text-sm">{text}</span>
          </div>
          {isActive && <ChevronRight size={20} className="text-[#d4af37]" />}
        </>
      )}
    </NavLink>
  );
};
