import { AppDispatch } from "@store/store";
import { DashboardLayout } from "@layouts/DashboardLayout/DashboardLayout";
import { getPurchases } from "@store/user/userThunk";
import { Navbar } from "@components/Navbar/Navbar";
import { PurchaseForm } from "@components/PurchaseForm/PurchaseForm";
import { PurchaseTable } from "@components/PurchaseTable/PurchaseTable";
import { Summary } from "@components/Summary/Summary";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export const Dashboard = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getPurchases());
  }, []);

  return (
    <DashboardLayout>
      <Navbar />
      <Summary />
      <PurchaseForm />
      <PurchaseTable />
    </DashboardLayout>
  );
};
