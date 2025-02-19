import { StepCard } from "@components/LandingPage/StepCard/StepCard";
import { Section } from "@layouts/LandingPage/Section/Section";
import { stepsData } from "./stepsData";

export const Steps = () => {
  return (
    <Section
      title="Comienza en tres simples pasos"
      description="Empieza a controlar tus gastos en minutos"
      className="mt-14 py-0"
    >
      <div className="mt-12 flex flex-col items-center justify-center gap-10 sm:gap-16 lg:flex-row">
        {stepsData.map((stepm, index) => (
          <StepCard key={index} {...stepm} />
        ))}
      </div>
    </Section>
  );
};
