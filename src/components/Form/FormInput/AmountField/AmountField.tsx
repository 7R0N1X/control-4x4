import { FormLabel } from "@components/Form/FormLabel";
import { FormInput } from "@components/Form/FormInput/FormInput";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { PurchaseFormData } from "@components/PurchaseForm/PurchaseForm";
import { DollarSign } from "lucide-react";

type AmountFieldProps = {
  register: UseFormRegister<PurchaseFormData>;
  errors: FieldErrors<PurchaseFormData>;
};

export const AmountField = ({ register, errors }: AmountFieldProps) => {
  return (
    <div className="flex w-full flex-col gap-2.5">
      <FormLabel htmlFor="amount" text="Valor total" />
      <FormInput
        id="amount"
        type="number"
        {...register("amount", { required: true, valueAsNumber: true })}
        aria-invalid={!!errors.amount}
        placeholder="Valor total"
        icon={DollarSign}
      />
    </div>
  );
};
