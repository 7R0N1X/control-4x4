import { DashboardLayout } from "@layouts/DashboardLayout/DashboardLayout";
import { Summary } from "@components/Summary/Summary";
import { PurchaseForm } from "@components/PurchaseForm/PurchaseForm";
import { PurchaseTable } from "@components/PurchaseTable/PurchaseTable";

export const Dashboard = () => {
  return (
    <DashboardLayout>
      <Summary />
      <PurchaseForm />
      <PurchaseTable />
    </DashboardLayout>
  );
};
