import { AuthRouter } from "./AuthRouter";
import { BeatLoader } from "react-spinners";
import { DashboardRouter } from "./DashboardRouter";
import { LandingPage } from "@pages/LandingPage/LandingPage";
import { RootState } from "@store/store";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

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
      <Route path="/" element={<LandingPage />} />

      {isAuthenticated ? (
        <Route path="/*" element={<DashboardRouter />} />
      ) : (
        <Route path="/auth/*" element={<AuthRouter />} />
      )}
    </Routes>
  );
};
