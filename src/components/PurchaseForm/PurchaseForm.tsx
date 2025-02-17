import { addNewPurchase } from "@store/user/userThunk";
import { AppDispatch } from "@store/store";
import { Barcode, Calendar, DollarSign, Store } from "lucide-react";
import { FormButton } from "@components/Form/FormButton";
import { FormInput } from "@components/Form/FormInput/FormInput";
import { FormLabel } from "@components/Form/FormLabel";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

type PurchaseFormData = {
  date: Date;
  store: string;
  trackingNumber: string;
  amount: number;
};

export const PurchaseForm = () => {
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<PurchaseFormData>();

  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = async (data: PurchaseFormData) => {
    try {
      await dispatch(addNewPurchase(data));
      toast.success("Compra agregada exitosamente")
      reset();
    } catch (error) {
      toast.error("Error al agregar la compra")
    }
  };

  return (
    <div className="rounded-lg bg-white p-6 ring shadow-sm ring-[#E4E4E7]">
      <h2 className="mb-4 text-lg font-semibold">Nueva Compra</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="flex items-end justify-between gap-4 max-lg:flex-col">
          <div className="flex w-full flex-col gap-2.5">
            <FormLabel htmlFor="date" text="Fecha" />
            <FormInput
              type="date"
              id="date"
              {...register("date", { required: true })}
              aria-invalid={!!errors.date}
              placeholder="Fecha"
              icon={Calendar}
            />
          </div>
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
          <FormButton type="internal" text="Agregar compra" />
        </div>
      </form>
    </div>
  );
};
