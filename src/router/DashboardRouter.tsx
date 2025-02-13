import { Dashboard } from "@pages/Dashboard/Dashboard";
import { Configuration } from "@pages/Configuration/Configuration";
import { Navigate, Routes, Route } from "react-router-dom";

export const DashboardRouter = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/configuration" element={<Configuration />} />
      <Route path="/*" element={<Navigate to={"/dashboard"} />} />
    </Routes>
  );
};
