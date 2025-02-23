import { AppDispatch } from "@store/store"
import { DollarSign } from "lucide-react"
import { FormButton } from "@components/Form/FormButton"
import { FormInput } from "@components/Form/FormInput/FormInput"
import { FormLabel } from "@components/Form/FormLabel"
import { ModalLayout } from "@layouts/ModalLayout/ModalLayout"
import { setAnnualQuotaThunk } from "@store/user/userThunk"
import { toast } from "react-toastify"
import { useDispatch } from "react-redux"
import { useForm } from "react-hook-form"

type FormValues = {
  annualQuota: number;
};

interface AnnualQuotaFormProps {
  onToggleModal: () => void;
}

export const AnnualQuotaModal = ({ onToggleModal }: AnnualQuotaFormProps) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>();
  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = async (data: FormValues) => {
    try {
      await dispatch(setAnnualQuotaThunk(data.annualQuota));
      reset();
      onToggleModal();
      toast.success("Cupo anual registrado");
    } catch (error) {
      toast.error("Error al registrar");
    }
  };

  return (
    <ModalLayout title="Editar Cupo Anual" onClose={onToggleModal}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4 flex flex-col gap-2">
          <FormLabel htmlFor="annual-quota" text="Cupo Anual ($)" />
          <FormInput
            id="annual-quota"
            type="number"
            icon={DollarSign}
            placeholder="Ingresa el nuevo valor"
            {...register("annualQuota", {
              required: true,
              valueAsNumber: true,
            })}
            aria-invalid={!!errors.annualQuota}
          />
          <span className="text-sm text-[#71717a]">
            Este valor se utilizará para calcular tu saldo disponible.
          </span>
        </div>
        <FormButton type="internal" text="Guardar cambios" />
      </form>
    </ModalLayout>
  )
}
