import { createNewPurchase, updatePurchaseThunk } from "@store/user/userThunk";
import { AppDispatch, RootState } from "@store/store";
import { Barcode, Calendar, DollarSign, Store, X } from "lucide-react";
import { FormButton } from "@components/Form/FormButton";
import { FormInput } from "@components/Form/FormInput/FormInput";
import { FormLabel } from "@components/Form/FormLabel";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { setIsEditing, setPurchaseEdit } from "@store/user/userSlice";

type PurchaseFormData = {
  id: string;
  date: string;
  store: string;
  trackingNumber: string;
  amount: number;
};

export const PurchaseForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { purchaseToEdit, isEditing } = useSelector((state: RootState) => state.user);
  const { register, handleSubmit, reset, formState: { errors }, setValue } = useForm<PurchaseFormData>();

  useEffect(() => {
    if (purchaseToEdit.length > 0) {
      const purchase = purchaseToEdit[0];
      const [day, month, year] = purchase.date.split("/");
      const formattedDate = new Date(`${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`).toISOString().split("T")[0];

      setValue("date", formattedDate);
      setValue("store", purchase.store);
      setValue("trackingNumber", purchase.trackingNumber);
      setValue("amount", purchase.amount);
    }
  }, [purchaseToEdit]);

  const onSubmit = async (data: PurchaseFormData) => {
    try {
      if (isEditing) {
        const { store, trackingNumber, amount } = purchaseToEdit[0];
        if (data.store !== store || data.trackingNumber !== trackingNumber || data.amount !== amount) {
          await dispatch(updatePurchaseThunk(purchaseToEdit[0].id, data));
          toast.success("Compra editada exitosamente");
          reset();
        }
        return;
      } else {
        await dispatch(createNewPurchase(data));
        toast.success("Compra agregada exitosamente");
        reset();
      }
    } catch (error) {
      toast.error("Error al agregar la compra");
    }
  };

  const onCancelEdit = () => {
    dispatch(setIsEditing(false));
    dispatch(setPurchaseEdit(""));
    reset();
  };

  return (
    <div className="rounded-lg bg-white p-6 ring shadow-sm ring-[#E4E4E7]">
      <div className="flex w-full items-center justify-between">
        <h2 className="mb-4 text-lg font-semibold">Nueva Compra</h2>
        {isEditing && (
          <button
            onClick={onCancelEdit}
            title="Cancelar edición"
            className="flex cursor-pointer items-center gap-1 rounded-md px-4 py-2 text-sm ring ring-[#D4AF37] transition-colors duration-300 hover:bg-[#D4AF37] max-sm:hidden"
          >
            <X size={16} /> Cancelar edición
          </button>
        )}
      </div>
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
          <FormButton type="internal" text={`${isEditing ? "Guardar cambios" : "Agregar compra"}`} />
          {isEditing && (
            <button
              onClick={onCancelEdit}
              title="Cancelar edición"
              className="flex w-full cursor-pointer items-center justify-center gap-1 rounded-md px-4 py-2 text-sm ring ring-[#D4AF37] transition-colors duration-300 hover:bg-[#D4AF37] sm:hidden"
            >
              <X size={16} /> Cancelar edición
            </button>
          )}
        </div>
      </form>
    </div>
  );
};
