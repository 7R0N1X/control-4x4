import { FormButton } from "@components/Form/FormButton";
import { FormLabel } from "@components/Form/FormLabel";
import { FormInput } from "@components/Form/FormInput/FormInput";
import { DollarSign, X } from "lucide-react";

interface AnnualQuotaFormProps {
  onClose: () => void;
}

export const AnnualQuotaForm = ({ onClose }: AnnualQuotaFormProps) => {
  return (
    <div className="fixed top-[50%] left-[50%] z-50 w-[512px] translate-x-[-50%] translate-y-[-50%] rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex w-full items-center justify-between">
        <h2 className="text-lg font-semibold">Editar Cupo Anual</h2>
        <button className="cursor-pointer" onClick={onClose} title="Cerrar">
          <X size={20} className="" />
        </button>
      </div>
      <form>
        <div className="mb-4 flex flex-col gap-2">
          <FormLabel htmlFor="annual-quota" text="Cupo Anual ($)" />
          <FormInput
            id="annual-quota"
            type="number"
            icon={DollarSign}
            placeholder="Ingresa el nuevo valor"
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
