import { AuthLayout } from "@layouts/AuthLayout/AuthLayout";
import { LoginForm } from "@components/LoginForm/LoginForm";
import { ResetPasswordModal } from "@components/ResetPasswordModal/ResetPasswordModal";
import { useState } from "react";

export const LoginPage = () => {
  const [openModal, setOpenModal] = useState(false);

  const onToggleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <AuthLayout title="Ingreso a plataforma" description="Ingresa tus credenciales para continuar">
      <LoginForm onToggleModal={onToggleModal} />
      {openModal && <ResetPasswordModal onClose={onToggleModal} />}
    </AuthLayout>
  );
};
