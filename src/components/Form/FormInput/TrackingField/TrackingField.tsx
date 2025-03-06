import { Barcode } from "lucide-react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormInput } from "@components/Form/FormInput/FormInput";
import { FormLabel } from "@components/Form/FormLabel";
import { PurchaseFormData } from "@components/PurchaseForm/PurchaseForm";

type TrackingFieldProps = {
  register: UseFormRegister<PurchaseFormData>;
  errors: FieldErrors<PurchaseFormData>;
};

export const TrackingField = ({ register, errors }: TrackingFieldProps) => {
  return (
    <div className="flex w-full flex-col gap-2.5">
      <FormLabel htmlFor="tracking-number" text="Tracking" />
      <FormInput
        type="text"
        id="tracking-number"
        {...register("trackingNumber", { required: true })}
        aria-invalid={!!errors.trackingNumber}
        placeholder="Tracking"
        icon={Barcode}
      />
    </div>
  );
};
