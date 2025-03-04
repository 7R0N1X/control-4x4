import { AuthRouter } from "./AuthRouter";
import { BeatLoader } from "react-spinners";
import { DashboardRouter } from "./DashboardRouter";
import { Navigate, Route, Routes } from "react-router-dom";
import { RootState } from "@store/store";
import { useSelector } from "react-redux";

export const AppRouter = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const isLoading = useSelector((state: RootState) => state.auth.isLoading);

  if (isLoading) {
    return (
      <div className="flex h-[100dvh] w-full items-center justify-center">
        <BeatLoader color="#D4AF37" />
      </div>
    );
  }

  return (
    <Routes>
      {isAuthenticated ? (
        <>
          <Route path="/dashboard/*" element={<DashboardRouter />} />
          <Route path="/*" element={<Navigate to="/dashboard" />} />
        </>
      ) : (
        <Route path="/auth/*" element={<AuthRouter />} />
      )}
      <Route path="/*" element={<Navigate to={"/auth/login"} />} />
    </Routes>
  );
};
