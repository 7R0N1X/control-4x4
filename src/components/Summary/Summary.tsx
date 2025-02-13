import { SummaryCard } from "@components/Summary/SummaryCard";
import { CoinsIcon, Package, ShoppingCart, TrendingUp } from "lucide-react";

export const Summary = () => {
  return (
    <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-3 xl:grid-cols-4">
      <SummaryCard icon={Package} title="Saldo Ocupado" amount={1000} />
      <SummaryCard icon={CoinsIcon} title="Saldo Disponible" amount={1000} />
      <SummaryCard icon={ShoppingCart} title="Compras Realizadas" amount={0} />
      <SummaryCard icon={TrendingUp} title="Cupo Anual" amount={1000} />
    </div>
  );
};
