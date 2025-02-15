import { DashboardLayout } from "@layouts/DashboardLayout/DashboardLayout";
import { Summary } from "@components/Summary/Summary";
import { PurchaseForm } from "@components/PurchaseForm/PurchaseForm";
import { PurchaseTable } from "@components/PurchaseTable/PurchaseTable";
import { Navbar } from "@components/Navbar/Navbar";

export const Dashboard = () => {
  return (
    <DashboardLayout>
      <Navbar />
      <Summary />
      <PurchaseForm />
      <PurchaseTable />
    </DashboardLayout>
  );
};
