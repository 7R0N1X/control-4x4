import { Logo } from "@components/Logo/Logo";
import { Link } from "react-router-dom";
import { Avatar } from "./Avatar";

export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white shadow-sm">
      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between p-4">
        <Link to={"/"} title="Ir al inicio">
          <Logo />
        </Link>
        <Avatar />
      </div>
    </header>
  );
};
