import { LoginPage } from "@pages/LoginPage/LoginPage";
import { RegisterPage } from "@pages/RegisterPage/RegisterPage";
import { Navigate, Route, Routes } from "react-router-dom";

export const AuthRouter = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="/*" element={<Navigate to={"/auth/login"} />} />
    </Routes>
  );
};
