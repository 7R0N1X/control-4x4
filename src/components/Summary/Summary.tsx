import { AppDispatch, RootState } from "@store/store";
import { getAnnualQuotaThunk } from "@store/user/userThunk";
import { setAvailableBalance, setTotalImported } from "@store/user/userSlice";
import { SummaryCard } from "@components/Summary/SummaryCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Wallet, PiggyBank, CreditCard } from "lucide-react";

export const Summary = () => {
  const dispatch = useDispatch<AppDispatch>();
  const annualQuota = useSelector((state: RootState) => state.user.annualQuota);
  const { purchases, availableBalance, totalImported } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    dispatch(getAnnualQuotaThunk());
  }, []);

  useEffect(() => {
    dispatch(setTotalImported(purchases));
    dispatch(setAvailableBalance());
  }, [purchases, annualQuota]);

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
        amount={availableBalance.toFixed(2)}
      />
      <SummaryCard
        icon={CreditCard}
        title="Total Importado"
        subtitle="Valor acumulado"
        amount={totalImported.toFixed(2)}
      />
    </div>
  );
};
