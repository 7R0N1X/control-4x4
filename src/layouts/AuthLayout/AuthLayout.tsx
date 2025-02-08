import img from "@assets/images/smiley-woman-shopping-online-with-laptop-credit-card.avif";
import { Logo } from "@components/Logo/Logo";

interface AuthLayout {
  title: string;
  description: string;
  children: React.ReactNode;
}

export const AuthLayout = ({ title, description, children }: AuthLayout) => {
  return (
    <section className="grid h-[100dvh] grid-cols-1 max-sm:p-4 lg:grid-cols-2">
      <div className="h-full w-full overflow-hidden max-lg:hidden">
        <img src={img} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <Logo />
        <h2 className="mb-2 text-2xl font-bold text-[#3C3C3B]">{title}</h2>
        <p className="text-sm text-[#9394A5]">{description}</p>
        {children}
      </div>
    </section>
  );
};
