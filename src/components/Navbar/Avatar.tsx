import { logOut } from "@store/auth/authThunk";
import { AppDispatch, RootState } from "@store/store";
import { ChevronDown, LogOut } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const Avatar = () => {
  const { displayName, photoURL } = useSelector(
    (state: RootState) => state.auth.auth,
  );

  const dispatch = useDispatch<AppDispatch>();

  const handleLogout = () => {
    dispatch(logOut());
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      role="button"
      className="flex cursor-pointer items-center gap-2.5"
      onClick={handleOpen}
    >
      <picture className="size-9 overflow-hidden rounded-full bg-white">
        <img
          src={photoURL ? photoURL : ""}
          alt={`Foto de ${displayName}`}
          className="size-9 object-cover"
        />
      </picture>

      <div className="relative flex flex-1 gap-2.5">
        <span className="text-sm font-medium select-none">{displayName}</span>
        <ChevronDown
          className={`${isOpen ? "rotate-180" : ""} transition-all`}
        />

        {isOpen && (
          <div className="absolute top-10 right-0 min-w-[max-content] rounded-md bg-white p-1 ring shadow-md ring-[#E4E4E7]">
            <button
              onClick={handleLogout}
              className="flex cursor-pointer items-center gap-2 px-2 py-1.5 text-sm font-medium text-red-600 transition-colors duration-300 hover:text-[#18181b]"
            >
              <LogOut size={14} /> Cerrar Sesión
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
