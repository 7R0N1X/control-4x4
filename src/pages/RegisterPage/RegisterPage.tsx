import { AuthLayout } from "@layouts/AuthLayout/AuthLayout";
import { FormButton } from "@components/FormButton/FormButton";
import { FormInput } from "@components/FormInput/FormInput";
import { FormLabel } from "@components/FormLabel/FormLabel";
import { FormLink } from "@components/FormLink/FormLink";
import { LockIcon, Mail, User } from "lucide-react";
import { useForm, SubmitHandler } from "react-hook-form";
import { createUserWithEmailAndPasswordThunk } from "@store/auth/authThunk";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@store/store";

type FormData = {
  userName: string;
  email: string;
  password: string;
};

export const RegisterPage = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const dispatch = useDispatch<AppDispatch>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const { userName, email, password } = data;
    dispatch(createUserWithEmailAndPasswordThunk(userName, email, password));
  };

  return (
    <AuthLayout
      title="Crear cuenta"
      description="Ingresa tus datos para registrarte"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 w-full max-w-[450px] space-y-4 rounded-lg p-6 ring shadow-sm ring-[#9394A5]/20"
      >
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

        <FormButton type="external" text="Registrase con Google" />

        <FormLink
          variant="center"
          href="/login"
          text="¿Ya tienes una cuenta? Inicia sesión"
        />
      </form>
    </AuthLayout>
  );
};
