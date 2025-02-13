import { AuthRouter } from "./AuthRouter";
import { DashboardRouter } from "./DashboardRouter";
import { Navigate, Route, Routes } from "react-router-dom";
import { RootState } from "@store/store";
import { useSelector } from "react-redux";
import { BeatLoader } from "react-spinners";

export const AppRouter = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated,
  );

  const isLoading = useSelector((state: RootState) => state.auth.isLoading);

  if (isLoading) {
    return <BeatLoader color="#d4af37" />;
  }

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
