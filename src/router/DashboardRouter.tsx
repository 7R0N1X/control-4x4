import { Dashboard } from "@pages/Dashboard/Dashboard";
import { Navigate, Routes, Route } from "react-router-dom";

export const DashboardRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};
