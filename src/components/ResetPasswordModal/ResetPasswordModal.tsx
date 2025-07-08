import { AppDispatch } from "@store/store";
import { FormButton } from "@components/Form/FormButton";
import { FormInput } from "@components/Form/FormInput/FormInput";
import { Mail } from "lucide-react";
import { ModalLayout } from "@layouts/ModalLayout/ModalLayout";
import { resetPasswordThunk } from "@store/auth/authThunk";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

type FormValues = {
  email: string;
};

interface ResetPasswordModalProps {
  onClose: () => void;
}

export const ResetPasswordModal = ({ onClose }: ResetPasswordModalProps) => {
  const dispatch = useDispatch<AppDispatch>()
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    try {
      if (!data.email) return;
      await dispatch(resetPasswordThunk(data.email))
      toast.success("Se ha enviado un correo con instrucciones para restablecer tu contraseña.");
    } catch (error) {
      toast.error("Hubo un error al enviar el correo. Inténtalo nuevamente.");
    } finally {
      reset();
      onClose();      
    }
  };

  return (
    <ModalLayout title="Restablecer contraseña" onClose={onClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4 flex flex-col gap-2">
          <FormInput
            icon={Mail}
            placeholder="Correo Electrónico"
            type="email"
            {...register("email", { required: true })}
            aria-invalid={!!errors.email}
          />
          <span className="text-sm text-[#565768]">
            Si el correo está registrado, recibirás un enlace para restablecer
            tu contraseña.
          </span>
        </div>
        <FormButton type="internal" text="Enviar" />
      </form>
    </ModalLayout>
  );
};
