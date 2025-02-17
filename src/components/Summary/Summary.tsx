import { SummaryCard } from "@components/Summary/SummaryCard";
import { AppDispatch, RootState } from "@store/store";
import { getAnnualQuotaThunk } from "@store/user/userThunk";
import { Wallet, PiggyBank, CreditCard } from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const Summary = () => {
  const dispatch = useDispatch<AppDispatch>();
  const annualQuota = useSelector((state: RootState) => state.user.annualQuota);
  
  useEffect(() => {
    dispatch(getAnnualQuotaThunk());
  }, []);

  return (
    <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
      <SummaryCard
        icon={Wallet}
        title="Cupo Anual"
        subtitle="Límite establecido"
        amount={annualQuota.toFixed(2)}
      />
      <SummaryCard
        icon={PiggyBank}
        title="Saldo Disponible"
        subtitle="Disponible para compras"
        amount={"0"}
      />
      <SummaryCard
        icon={CreditCard}
        title="Total Importado"
        subtitle="Valor acumulado"
        amount={"0"}
      />
    </div>
  );
};
