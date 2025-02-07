import { SummaryCard } from "@components/SummaryCard/SummaryCard";
import { CoinsIcon, Package, TrendingUp } from "lucide-react";

export const Summary = () => {
  return (
    <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
      <SummaryCard icon={Package} title="Total Importación" amount={1000} />
      <SummaryCard icon={CoinsIcon} title="Saldo de Cupo" amount={1000} />
      <SummaryCard icon={TrendingUp} title="Cupo Anual" amount={1000} />
    </div>
  );
};
