import { AuthLayout } from "@layouts/AuthLayout/AuthLayout";
import { RegisterForm } from "@components/RegisterForm/RegisterForm";

export const RegisterPage = () => {
  return (
    <AuthLayout title="Crear cuenta" description="Ingresa tus datos para registrarte" >
      <RegisterForm />
    </AuthLayout>
  );
};
