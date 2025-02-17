import { AppDispatch } from "@store/store";
import { DollarSign, X } from "lucide-react";
import { FormButton } from "@components/Form/FormButton";
import { FormInput } from "@components/Form/FormInput/FormInput";
import { FormLabel } from "@components/Form/FormLabel";
import { setAnnualQuotaThunk } from "@store/user/userThunk";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  annualQuota: number;
};

interface AnnualQuotaFormProps {
  onClose: () => void;
}

export const AnnualQuotaForm = ({ onClose }: AnnualQuotaFormProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    try {
      await dispatch(setAnnualQuotaThunk(data.annualQuota));
      toast.success("Cupo anual registrado");
    } catch (error) {
      toast.error("Error al registrar");
    }
  };

  useEffect(() => {
    if (errors.annualQuota) {
      toast.error("Por favor, ingresa un valor válido");
    }
  }, [errors.annualQuota]);

  return (
    <div className="fixed top-[50%] left-[50%] z-50 w-[512px] translate-x-[-50%] translate-y-[-50%] rounded-lg border border-zinc-200 bg-white p-6 shadow-sm max-sm:w-full">
      <div className="mb-4 flex w-full items-center justify-between">
        <h2 className="text-lg font-semibold">Editar Cupo Anual</h2>
        <button className="cursor-pointer" onClick={onClose} title="Cerrar">
          <X size={20} />
        </button>
      </div>
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
            Este valor se utilizará para calcular tu saldo disponible
          </span>
        </div>
        <FormButton type="internal" text="Guardar cambios" />
      </form>
    </div>
  );
};
