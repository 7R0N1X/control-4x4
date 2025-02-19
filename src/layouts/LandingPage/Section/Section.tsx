interface SectionProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
}

export const Section = ({ title, description, children, className }: SectionProps) => {
  return (
    <section className={`h-full w-full p-4 lg:p-0 ${className ? className : ""}`}>
      <div className="mx-auto max-w-screen-xl">
        {title && (
          <div className="flex flex-col items-center justify-center gap-4">
            <h2 data-aos="fade-up" data-aos-duration="500" className="text-center text-3xl font-bold text-neutral-800">
              {title}
            </h2>
            <p data-aos="fade-up" data-aos-duration="500" className="text-center text-lg text-[#606271]">{description}</p>
          </div>
        )}
        {children}
      </div>
    </section>
  );
};
