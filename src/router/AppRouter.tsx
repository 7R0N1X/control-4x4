import { AuthRouter } from "./AuthRouter";
import { DashboardRouter } from "./DashboardRouter";
import { Navigate, Route, Routes } from "react-router-dom";
import { RootState } from "@store/store";
import { useSelector } from "react-redux";

export const AppRouter = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated,
  );
  return (
    <Routes>
      {isAuthenticated ? (
        <Route path="/*" element={<DashboardRouter />} />
      ) : (
        <Route path="/auth/*" element={<AuthRouter />} />
      )}

      <Route path="/*" element={<Navigate to={"/auth/login"} />} />
    </Routes>
  );
};
