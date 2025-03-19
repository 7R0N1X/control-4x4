import { FormInput } from "@components/Form/FormInput/FormInput";
import { FormLabel } from "@components/Form/FormLabel";
import { Calendar } from "lucide-react";
import { PurchaseFormData } from "@components/PurchaseForm/PurchaseForm";
import { FieldErrors, UseFormRegister } from "react-hook-form";

type DateFieldProps = {
  register: UseFormRegister<PurchaseFormData>;
  errors: FieldErrors<PurchaseFormData>;
};

export const DateField = ({ register, errors }: DateFieldProps) => {
  return (
    <div className="flex w-full flex-col gap-2.5">
      <FormLabel htmlFor="date" text="Fecha" />
      <FormInput
        type="date"
        max={new Date().toISOString().split("T")[0]}
        id="date"
        {...register("date", { required: true })}
        aria-invalid={!!errors.date}
        placeholder="Fecha"
        icon={Calendar}
      />
    </div>
  );
};
