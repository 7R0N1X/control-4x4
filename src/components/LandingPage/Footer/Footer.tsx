export const Footer = () => {
  return (
    <footer className="w-full pt-14">
      <div className="mx-auto flex max-w-[1440px] items-center justify-center">
        <div className="flex items-center gap-1 py-4 text-[#606271]">
          <span>© {new Date().getFullYear()} Control 4x4</span>
          <span>|</span>
          <span>
            Desarrollado por{" "}
            <a href="https://tronix-portfolio.vercel.app" target="_blank" rel="noopener noreferrer">
              7R0N1X
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};
