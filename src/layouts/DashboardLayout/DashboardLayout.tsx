import { Menu, X } from "lucide-react";
import { Sidebar } from "@components/Sidebar/Sidebar";
import { useState } from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="mx-auto flex min-h-screen w-full bg-[#FAFAFA]">
      <Sidebar isMenuOpen={isMenuOpen} />
      {isMenuOpen ? (
        <button
          className="fixed right-4 bottom-4 z-60 rounded-full bg-[#3C3C3B] p-2 lg:hidden"
          onClick={toggleMenu}
        >
          <X size={24} className="text-white" />
        </button>
      ) : (
        <button
          className="fixed right-4 bottom-4 z-60 rounded-full bg-[#3C3C3B] p-2 lg:hidden"
          onClick={toggleMenu}
        >
          <Menu size={24} className="text-white" />
        </button>
      )}
      <div className="w-full">
        <div className="mx-auto flex w-full flex-col gap-6 p-6 lg:pl-[324px]">
          {children}
        </div>
      </div>
    </section>
  );
};
