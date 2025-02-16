import "./index.css";
import { AppRouter } from "./router/AppRouter";
import { authListener } from "@utils/authListener";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "@store/store";
import { StrictMode } from "react";
import { ToastContainer } from "react-toastify";

authListener(store.dispatch);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter />
        <ToastContainer limit={3} position="bottom-right" />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
