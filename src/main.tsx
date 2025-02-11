import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Dashboard } from "@pages/Dashboard/Dashboard";
import { LoginPage } from "@pages/LoginPage/LoginPage";
import { Provider } from "react-redux";
import { RegisterPage } from "@pages/RegisterPage/RegisterPage";
import { store } from "@store/store";
import { StrictMode } from "react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
