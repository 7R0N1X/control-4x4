import { FormButton } from "@components/FormButton/FormButton";
import { FormLabel } from "@components/FormLabel/FormLabel";
import { FormLink } from "@components/FormLink/FormLink";
import { FormInput } from "@components/FormInput/FormInput";
import { AuthLayout } from "@layouts/AuthLayout/AuthLayout";
import { LockIcon, Mail } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@store/store";
import { signInWithEmailAndPasswordThunk } from "@store/auth/authThunk";

type LoginForm = {
  email: string;
  password: string;
};

export const LoginPage = () => {
  const { register, handleSubmit, reset } = useForm<LoginForm>();
  const dispatch = useDispatch<AppDispatch>();

  const onSubmit: SubmitHandler<LoginForm> = (data) => {
    const { email, password } = data;
    dispatch(signInWithEmailAndPasswordThunk(email, password));
    reset();
  };
  return (
    <AuthLayout
      title="Ingreso a plataforma"
      description="Ingresa tus credenciales para continuar"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 w-full max-w-[450px] space-y-4 rounded-lg p-6 ring shadow-sm ring-[#9394A5]/20"
      >
        <div className="flex flex-col gap-2">
          <FormLabel htmlFor="email" text="Correo Electrónico" />
          <FormInput
            id="email"
            type="email"
            placeholder="Correo Electrónico"
            icon={Mail}
            {...register("email")}
          />
        </div>

        <div className="flex flex-col gap-2">
          <FormLabel htmlFor="password" text="Contraseña" />
          <FormInput
            id="password"
            type="password"
            placeholder="Contraseña"
            icon={LockIcon}
            {...register("password")}
          />
        </div>

        <FormLink variant="right" href="" text="¿Olvidaste tu contraseña?" />

        <FormButton type="internal" text="Iniciar Sesión" />

        <div className="flex items-center gap-2.5">
          <div className="h-[1px] w-full bg-[#D9D9D9]"></div>
          <span className="font-medium text-[#9394A5]">o</span>
          <div className="h-[1px] w-full bg-[#D9D9D9]"></div>
        </div>

        <FormButton type="external" text="Continuar con Google" />

        <FormLink
          variant="center"
          href="/register"
          text="¿No tienes una cuenta? Regístrate"
        />
      </form>
    </AuthLayout>
  );
};
