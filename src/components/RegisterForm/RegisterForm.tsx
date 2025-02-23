import { AppDispatch } from "@store/store";
import { createUserWithEmailAndPasswordThunk, signInWithGoogleThunk } from "@store/auth/authThunk";
import { FormButton } from "@components/Form/FormButton";
import { FormInput } from "@components/Form/FormInput/FormInput";
import { FormLabel } from "@components/Form/FormLabel";
import { FormLink } from "@components/Form/FormLink";
import { LockIcon, Mail, User } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

type RegisterForm = {
  userName: string;
  email: string;
  password: string;
};

export const RegisterForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<RegisterForm>();
  const dispatch = useDispatch<AppDispatch>();

  const onSubmit: SubmitHandler<RegisterForm> = (data) => {
    if (!data.userName || !data.email || !data.password) return;

    const { userName, email, password } = data;
    dispatch(createUserWithEmailAndPasswordThunk(userName, email, password));
    reset();
  };

  const onSignInWithGoogle = () => {
    dispatch(signInWithGoogleThunk());
  };

  return (
    <div className="mt-8 w-full max-w-[450px] space-y-4 rounded-lg p-6 ring shadow-sm ring-[#9394A5]/20">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex flex-col gap-2">
          <FormLabel htmlFor="userName" text="Usuario" />
          <FormInput
            id="userName"
            type="text"
            placeholder="Usuario"
            icon={User}
            {...register("userName", { required: true })}
            aria-invalid={!!errors.userName}
          />
        </div>

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

        <FormButton type="internal" text="Registrarse" />

        <div className="flex items-center gap-2.5">
          <div className="h-[1px] w-full bg-[#D9D9D9]"></div>
          <span className="font-medium text-[#9394A5]">o</span>
          <div className="h-[1px] w-full bg-[#D9D9D9]"></div>
        </div>
      </form>

      <FormButton onClick={onSignInWithGoogle} type="external" text="Registrase con Google" />

      <FormLink variant="center" href="/auth/login" text="¿Ya tienes una cuenta? Inicia sesión" />
    </div>
  );
};
