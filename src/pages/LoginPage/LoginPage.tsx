import { AppDispatch } from "@store/store";
import { AuthLayout } from "@layouts/AuthLayout/AuthLayout";
import { FormButton } from "@components/Form/FormButton";
import { FormInput } from "@components/Form/FormInput/FormInput";
import { FormLabel } from "@components/Form/FormLabel";
import { FormLink } from "@components/Form/FormLink";
import { LockIcon, Mail } from "lucide-react";
import { ResetPasswordModal } from "@components/ResetPasswordModal/ResetPasswordModal";
import { signInWithEmailAndPasswordThunk, signInWithGoogleThunk } from "@store/auth/authThunk";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

type LoginForm = {
  email: string;
  password: string;
};

export const LoginPage = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<LoginForm>();
  const dispatch = useDispatch<AppDispatch>();
  const [openModal, setOpenModal] = useState(false);

  const onSubmit: SubmitHandler<LoginForm> = (data) => {
    if (!data.email || !data.password) return;

    const { email, password } = data;
    dispatch(signInWithEmailAndPasswordThunk(email, password));
    reset();
  };

  useEffect(() => {
    if (errors.email || errors.password) {
      toast.error("Por favor, completa todos los campos requeridos.");
    }
  }, [errors.email, errors.password]);

  const onSignInWithGoogle = () => {
    dispatch(signInWithGoogleThunk());
  };

  const onToggleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <AuthLayout title="Ingreso a plataforma" description="Ingresa tus credenciales para continuar" >
      <div className="mt-8 w-full max-w-[450px] space-y-4 rounded-lg p-6 ring shadow-sm ring-[#9394A5]/20">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex flex-col gap-2">
            <FormLabel htmlFor="email" text="Correo Electrónico" />
            <FormInput
              id="email"
              type="email"
              placeholder="Correo Electrónico"
              icon={Mail}
              {...register("email", { required: true })}
              aria-invalid={!!errors.email}
            />
          </div>

          <div className="flex flex-col gap-2">
            <FormLabel htmlFor="password" text="Contraseña" />
            <FormInput
              id="password"
              type="password"
              placeholder="Contraseña"
              icon={LockIcon}
              {...register("password", { required: true })}
              aria-invalid={!!errors.password}
            />
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={onToggleModal}
              className="text-sm text-[#9394A5] cursor-pointer"
            >
              ¿Olvidaste tu contraseña?
            </button>
          </div>

          <FormButton type="internal" text="Iniciar Sesión" />

          <div className="flex items-center gap-2.5">
            <div className="h-[1px] w-full bg-[#D9D9D9]"></div>
            <span className="font-medium text-[#9394A5]">o</span>
            <div className="h-[1px] w-full bg-[#D9D9D9]"></div>
          </div>
        </form>

        <FormButton onClick={onSignInWithGoogle} type="external" text="Continuar con Google" />

        <FormLink variant="center" href="/auth/register" text="¿No tienes una cuenta? Regístrate" />
      </div>

      {openModal && <ResetPasswordModal onClose={onToggleModal} />}
      
    </AuthLayout>
  );
};
