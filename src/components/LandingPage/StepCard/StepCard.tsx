interface StepCardProps {
  step: string;
  title: string;
  description: string;
}

export const StepCard = ({ step, title, description }: StepCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 w-[380px]">
      <span className="flex size-12 items-center justify-center rounded-full bg-[#F7EDCC] p-2.5 text-xl font-semibold text-[#D4AF37]">
        {step}
      </span>
      <div className="space-y-2">
        <h3 className="text-center text-lg font-semibold">{title}</h3>
        <p className="text-center text-[#475569]">{description}</p>
      </div>
    </div>
  );
};
