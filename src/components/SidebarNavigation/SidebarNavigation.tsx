import { NavItem } from "@components/NavItem/NavItem";
import { navLinks } from "./navLinks";

export const SidebarNavigation = () => {
  return (
    <nav className="p-4">
      <ul className="space-y-[10px]">
        {navLinks.map((navLink) => {
          return (
            <NavItem
              icon={navLink.icon}
              text={navLink.text}
              path={navLink.path}
              isActive={false}
            />
          );
        })}
      </ul>
    </nav>
  );
};
