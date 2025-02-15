interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <section className="flex min-h-screen w-full bg-[#FAFAFA]">
      <div className="mx-auto w-full max-w-[1400px] pt-[68px]">
        <div className="mx-auto flex w-full flex-col gap-6 p-4 lg:pt-6">
          {children}
        </div>
      </div>
    </section>
  );
};
