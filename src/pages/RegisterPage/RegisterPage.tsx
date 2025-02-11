import { AuthLayout } from "@layouts/AuthLayout/AuthLayout";
import { FormButton } from "@components/FormButton/FormButton";
import { FormInput } from "@components/FormInput/FormInput";
import { FormLabel } from "@components/FormLabel/FormLabel";
import { FormLink } from "@components/FormLink/FormLink";
import { LockIcon, Mail, User } from "lucide-react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  createUserWithEmailAndPasswordThunk,
  signInWithGoogleThunk,
} from "@store/auth/authThunk";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@store/store";

type FormData = {
  userName: string;
  email: string;
  password: string;
};

export const RegisterPage = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const dispatch = useDispatch<AppDispatch>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const { userName, email, password } = data;
    dispatch(createUserWithEmailAndPasswordThunk(userName, email, password));
    reset();
  };

  const onClick = () => {
    dispatch(signInWithGoogleThunk());
  };

  return (
    <AuthLayout
      title="Crear cuenta"
      description="Ingresa tus datos para registrarte"
    >
      <div className="mt-8 w-full max-w-[450px] space-y-4 rounded-lg p-6 ring shadow-sm ring-[#9394A5]/20">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex flex-col gap-2">
            <FormLabel htmlFor="userName" text="Usuario" />
            <FormInput
              id="userName"
              type="text"
              placeholder="Usuario"
              icon={User}
              {...register("userName")}
            />
          </div>

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

          <FormButton type="internal" text="Registrarse" />

          <div className="flex items-center gap-2.5">
            <div className="h-[1px] w-full bg-[#D9D9D9]"></div>
            <span className="font-medium text-[#9394A5]">o</span>
            <div className="h-[1px] w-full bg-[#D9D9D9]"></div>
          </div>
        </form>
        <FormButton
          onClick={onClick}
          type="external"
          text="Registrase con Google"
        />

        <FormLink
          variant="center"
          href="/auth/login"
          text="¿Ya tienes una cuenta? Inicia sesión"
        />
      </div>
    </AuthLayout>
  );
};
