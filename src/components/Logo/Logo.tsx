interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <h1
      className={`${className} inline-flex bg-gradient-to-r from-zinc-600 via-[#D4AF37] to-zinc-600 bg-clip-text text-2xl font-bold text-transparent`}
    >
      Control 4x4
    </h1>
  );
};
