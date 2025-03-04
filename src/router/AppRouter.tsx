import { AuthRouter } from "./AuthRouter";
import { BeatLoader } from "react-spinners";
import { RootState } from "@store/store";
import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { Dashboard } from "@pages/Dashboard/Dashboard";

export const AppRouter = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated,
  );

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
        <Route path="/dashboard" element={<Dashboard />} />
      ) : (
        <Route path="/auth/*" element={<AuthRouter />} />
      )}
      <Route path="/*" element={<Navigate to={"/auth/login"} />} />
    </Routes>
  );
};
