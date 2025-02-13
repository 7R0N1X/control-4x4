import { NavItem } from "@components/Sidebar/NavItem";
import { navLinks } from "./navLinks";

export const SidebarNavigation = () => {
  return (
    <nav className="p-4">
      <ul className="space-y-[10px]">
        {navLinks.map((navLink, index) => {
          return (
            <NavItem
              key={index}
              icon={navLink.icon}
              text={navLink.text}
              path={navLink.path}
            />
          );
        })}
      </ul>
    </nav>
  );
};
