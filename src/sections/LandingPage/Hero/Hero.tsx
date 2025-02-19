import { ArrowRight } from "lucide-react";
import { Badge } from "@components/LandingPage/Badge/Badge";
import { Link } from "react-router-dom";
import { Section } from "@layouts/LandingPage/Section/Section";

export const Hero = () => {
  return (
    <Section className="flex max-sm:h-[100dvh] min-h-[700px] items-center justify-center">
      <div className="mx-auto flex h-full w-full max-w-[680px] flex-col items-center justify-center gap-10">
        <div className="flex flex-col items-center justify-center gap-6">
          <span className="inline-flex rounded-full bg-[#242424] px-3 py-1 text-xs text-[#E7C966]">
            <Badge title="Control de Gastos 4x4" />
          </span>
          <h1 className="text-center text-3xl sm:text-6xl font-bold tracking-[95%] text-neutral-800">
            Nunca más te excedas de tu cupo anual
          </h1>
          <p className="text-center text-[#606271] text-lg">
            Registra y controla tus compras internacionales. Evita multas por
            exceder el límite de tu cupo 4x4.
          </p>
        </div>
        <Link
          to={"/auth/login"}
          className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-[#3C3C3B] px-4 py-2 font-medium text-[#D4AF37]"
        >
          Comienza Ahora <ArrowRight size={16} />
        </Link>
      </div>
    </Section>
  );
};
