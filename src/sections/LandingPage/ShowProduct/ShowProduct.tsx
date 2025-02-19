import { Section } from "@layouts/LandingPage/Section/Section";
import appImage from "@assets/images/app.png";

export const ShowProduct = () => {
  return (
    <Section
      title="Simple y efectivo"
      description="Una interfaz intuitiva que te permite registrar y visualizar tus gastos en cuestión de segundos"
      className="py-0"
    >
      <div data-aos="fade-up" data-aos-duration="500" className="mt-12 flex items-center justify-center w-full">
        <img
          src={appImage}
          alt="Control 4x4"
          className="w-full h-auto lg:h-[529px] lg:w-[884px] object-cover"
        />
      </div>
    </Section>
  );
};
