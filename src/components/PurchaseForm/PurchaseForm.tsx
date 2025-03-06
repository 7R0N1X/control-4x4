import { createNewPurchase, updatePurchaseThunk } from "@store/user/userThunk";
import { AppDispatch, RootState } from "@store/store";
import { X } from "lucide-react";
import { FormButton } from "@components/Form/FormButton";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { setIsEditing, setPurchaseEdit } from "@store/user/userSlice";
import { DateField } from "@components/Form/FormInput/DateField/DateField";
import { StoreField } from "@components/Form/FormInput/StoreField/StoreField";
import { TrackingField } from "@components/Form/FormInput/TrackingField/TrackingField";
import { AmountField } from "@components/Form/FormInput/AmountField/AmountField";
import { formatDate } from "@utils/formatDate";

export type PurchaseFormData = {
  id: string;
  date: string;
  store: string;
  trackingNumber: string;
  amount: number;
};

export const PurchaseForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { purchaseToEdit, isEditing, availableBalance } = useSelector(
    (state: RootState) => state.user,
  );
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm<PurchaseFormData>();

  useEffect(() => {
    if (purchaseToEdit.length > 0) {
      const purchase = purchaseToEdit[0];
      setValue("date", formatDate(purchase.date));
      setValue("store", purchase.store);
      setValue("trackingNumber", purchase.trackingNumber);
      setValue("amount", purchase.amount);
    }
  }, [purchaseToEdit]);

  const onSubmit = async (data: PurchaseFormData) => {
    try {
      if (isEditing) {
        const { store, trackingNumber, amount } = purchaseToEdit[0];
        if (
          data.store !== store ||
          data.trackingNumber !== trackingNumber ||
          data.amount !== amount
        ) {
          await dispatch(updatePurchaseThunk(purchaseToEdit[0].id, data));
          toast.success("Compra editada exitosamente");
        }
        return;
      } else {
        if (availableBalance >= data.amount && data.amount != 0) {
          await dispatch(createNewPurchase({...data, date: formatDate(data.date)}));
          toast.success("Compra agregada exitosamente");
          return;
        }
        toast.error("No cuenta con saldo disponible para esta transacción.");
      }
    } catch (error) {
      toast.error("Error al agregar la compra");
    } finally {
      reset();
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
          <DateField register={register} errors={errors} />
          <StoreField register={register} errors={errors} />
          <TrackingField register={register} errors={errors} />
          <AmountField register={register} errors={errors} />

          <FormButton
            type="internal"
            text={`${isEditing ? "Guardar cambios" : "Agregar compra"}`}
          />
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
