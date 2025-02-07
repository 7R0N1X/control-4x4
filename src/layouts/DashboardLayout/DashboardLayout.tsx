interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <section className="mx-auto min-h-screen w-full bg-[#FAFAFA]">
      <div className="mx-auto flex h-full w-full max-w-screen-xl flex-col gap-6 p-4 pt-6">
        {children}
      </div>
    </section>
  );
};
