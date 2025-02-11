import { logOut } from "@store/auth/authThunk";
import { AppDispatch } from "@store/store";
import { LogOut } from "lucide-react";
import { useDispatch } from "react-redux";

export const Header = () => {
  const dispatch = useDispatch<AppDispatch>();
  const onLogOut = () => {
    dispatch(logOut());
  };

  return (
    <header className="w-full border-b border-[#e4e4e7] bg-white shadow-sm">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between p-4">
        <h1 className="inline-flex bg-gradient-to-r from-[#A3A3A3] via-[#D4AF37] to-[#A3A3A3] bg-clip-text text-2xl font-bold text-transparent">
          Control 4x4
        </h1>
        <button
          onClick={onLogOut}
          className="flex h-10 cursor-pointer items-center gap-2 rounded-md px-4 py-2 transition-colors duration-300 hover:bg-[#f4f4f5]"
        >
          <LogOut size={16} />
          <span className="text-sm font-medium text-[#18181b]">
            Cerrar sesión
          </span>
        </button>
      </div>
    </header>
  );
};
