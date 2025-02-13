import { AppDispatch, RootState } from "@store/store";
import { ChevronRight, LayoutDashboard, LogOut, Settings } from "lucide-react";
import { Logo } from "@components/Logo/Logo";
import { logOut } from "@store/auth/authThunk";
import { useDispatch, useSelector } from "react-redux";

interface SidebarProps {
  isMenuOpen: boolean;
}

export const Sidebar = ({ isMenuOpen }: SidebarProps) => {
  const { displayName, photoURL, email } = useSelector(
    (state: RootState) => state.auth.auth,
  );
  const dispatch = useDispatch<AppDispatch>();
  const onLogOut = () => {
    dispatch(logOut());
  };
  return (
    <aside
      className={`fixed top-0 z-50 flex h-[100dvh] w-full max-w-[300px] flex-col justify-between bg-white transition-all duration-300 lg:left-0 ${isMenuOpen ? "left-0" : "-left-full"}`}
    >
      <div>
        <div className="flex max-h-[65px] min-h-[65px] w-full items-center justify-start border-b border-b-[#E4E4E7] p-4">
          <Logo />
        </div>
        <div className="flex w-full gap-3 border-b border-b-[#E4E4E7] p-4">
          <picture className="min-h-10 min-w-10 overflow-hidden rounded-full">
            <img src={photoURL || ""} alt="" className="size-10 object-cover" />
          </picture>
          <div className="flex w-full flex-col">
            <span className="text-sm font-medium">{displayName}</span>
            <span className="font-[#71717A] text-xs">{email}</span>
          </div>
        </div>
        <nav className="p-4">
          <ul className="space-y-[10px]">
            <li>
              <a
                href=""
                className="flex w-full items-center justify-between rounded-lg bg-[#d4af371a] px-3 py-2"
              >
                <div className="flex gap-3">
                  <LayoutDashboard size={20} className="text-[#d4af37]" />
                  <span className="text-sm font-medium text-[#d4af37] group-hover:text-[#18181B]">
                    Dashboard
                  </span>
                </div>
                <ChevronRight size={20} className="text-[#d4af37]" />
              </a>
            </li>
            <li>
              <a
                href=""
                className="group dura flex w-full items-center justify-between rounded-lg px-3 py-2 transition-colors duration-300 hover:bg-[#FAFAFA]"
              >
                <div className="flex gap-3">
                  <Settings
                    size={20}
                    className="text-[#52525B] group-hover:text-[#18181B]"
                  />
                  <span className="text-sm font-medium text-[#52525B] group-hover:text-[#18181B]">
                    Configuración
                  </span>
                </div>
              </a>
            </li>
          </ul>
        </nav>
      </div>
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
    </aside>
  );
};
