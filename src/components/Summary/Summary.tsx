import { SummaryCard } from "@components/Summary/SummaryCard";
import { Wallet, PiggyBank, CreditCard } from "lucide-react";

export const Summary = () => {
  return (
    <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
      <SummaryCard
        icon={Wallet}
        title="Cupo Anual"
        subtitle="Límite establecido"
        amount={1000}
      />
      <SummaryCard
        icon={PiggyBank}
        title="Saldo Disponible"
        subtitle="Disponible para compras"
        amount={1000}
      />
      <SummaryCard
        icon={CreditCard}
        title="Total Importado"
        subtitle="Valor acumulado"
        amount={0}
      />
    </div>
  );
};
