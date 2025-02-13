import { AppDispatch, RootState } from "@store/store";
import { Avatar } from "@components/Avatar/Avatar";
import { Logo } from "@components/Logo/Logo";
import { logOut } from "@store/auth/authThunk";
import { SidebarFooter } from "@components/SidebarFooter/SidebarFooter";
import { SidebarNavigation } from "@components/SidebarNavigation/SidebarNavigation";
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
    <aside className={`fixed top-0 z-50 flex h-[100dvh] w-full max-w-[300px] flex-col justify-between bg-white transition-all duration-300 lg:left-0 ${isMenuOpen ? "left-0" : "-left-full"}`}>
      <div>
        <div className="flex max-h-[65px] min-h-[65px] w-full items-center justify-start border-b border-b-[#E4E4E7] p-4">
          <Logo />
        </div>
        <Avatar displayName={displayName} photoURL={photoURL} email={email} />
        <SidebarNavigation />
      </div>
      <SidebarFooter onLogOut={onLogOut} />
    </aside>
  );
};
