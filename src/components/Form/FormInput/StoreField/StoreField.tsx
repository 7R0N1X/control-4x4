import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormInput } from "@components/Form/FormInput/FormInput";
import { FormLabel } from "@components/Form/FormLabel";
import { PurchaseFormData } from "@components/PurchaseForm/PurchaseForm";
import { Store } from "lucide-react";

type StoreFieldProps = {
  register: UseFormRegister<PurchaseFormData>;
  errors: FieldErrors<PurchaseFormData>;
};

export const StoreField = ({ register, errors }: StoreFieldProps) => {
  return (
    <div className="flex w-full flex-col gap-2.5">
      <FormLabel htmlFor="store" text="Tienda" />
      <FormInput
        type="text"
        id="store"
        {...register("store", { required: true })}
        aria-invalid={!!errors.store}
        placeholder="Tienda"
        icon={Store}
      />
    </div>
  );
};
