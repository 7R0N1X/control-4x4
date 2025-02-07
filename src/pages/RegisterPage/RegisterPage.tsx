import { FormButton } from "@components/FormButton/FormButton";
import { FormInput } from "@components/FormInput/FormInput";
import { FormLabel } from "@components/FormLabel/FormLabel";
import { FormLink } from "@components/FormLink/FormLink";
import { AuthLayout } from "@layouts/AuthLayout/AuthLayout";
import { LockIcon, Mail, User } from "lucide-react";

export const RegisterPage = () => {
  return (
    <AuthLayout
      title="Crear cuenta"
      description="Ingresa tus datos para registrarte"
    >
      <form
        action=""
        className="mt-8 w-full max-w-[450px] space-y-4 rounded-lg p-6 ring shadow-sm ring-[#9394A5]/20"
      >
        <div className="flex flex-col gap-2">
          <FormLabel htmlFor="user" text="Usuario" />
          <FormInput id="user" type="text" placeholder="Usuario" icon={User} />
        </div>

        <div className="flex flex-col gap-2">
          <FormLabel htmlFor="email" text="Correo Electrónico" />
          <FormInput
            id="email"
            type="email"
            placeholder="Correo Electrónico"
            icon={Mail}
          />
        </div>

        <div className="flex flex-col gap-2">
          <FormLabel htmlFor="password" text="Contraseña" />
          <FormInput
            id="password"
            type="password"
            placeholder="Contraseña"
            icon={LockIcon}
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
          href=""
          text="¿Ya tienes una cuenta? Inicia sesión"
        />
      </form>
    </AuthLayout>
  );
};
