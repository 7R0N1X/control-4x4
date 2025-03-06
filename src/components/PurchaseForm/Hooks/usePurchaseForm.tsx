import { createNewPurchase, updatePurchaseThunk } from "@store/user/userThunk";
import { formatDate } from "@utils/formatDate";
import { PurchaseData, setIsEditing, setPurchaseEdit } from "@store/user/userSlice";
import { PurchaseFormData } from "@components/PurchaseForm/PurchaseForm";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

type usePurchaseFormProps = {
  dispatch: any;
  purchaseToEdit: PurchaseData[];
  isEditing: boolean;
  availableBalance: number;
};

export const usePurchaseForm = ({ dispatch, purchaseToEdit, isEditing, availableBalance }: usePurchaseFormProps) => {

  const { register, handleSubmit, reset, formState: { errors }, setValue } = useForm<PurchaseFormData>();

  const onSubmit = (data: PurchaseFormData) => {
    try {
      if (isEditing) {
        const { date, store, trackingNumber, amount } = purchaseToEdit[0];
        if (data.date != date || data.store != store || data.trackingNumber != trackingNumber || data.amount != amount) {
          dispatch(updatePurchaseThunk(purchaseToEdit[0].id, data));
          toast.success("Compra editada exitosamente");
        } else {
          toast.error("No hay cambios para guardar")
          onCancelEdit()
        }
      } else {
        if (availableBalance >= data.amount && data.amount != 0) {
          dispatch(createNewPurchase({ ...data, date: formatDate(data.date) }));
          toast.success("Compra agregada exitosamente");
          return;
        }
        toast.error("No cuenta con saldo disponible para esta transacción");
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

  return { register, handleSubmit, errors, setValue, onSubmit, onCancelEdit };
};
