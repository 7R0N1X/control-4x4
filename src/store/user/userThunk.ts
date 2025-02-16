import { db } from "@/firebase/config";
import { collection, addDoc } from "firebase/firestore/lite";
import { AppDispatch, RootState } from "@store/store";
import { setPurchase } from "./userSlice";

export const addNewPurchase = (data: any) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const {
      auth: { uid },
    } = getState().auth;

    try {
      const docRef = await addDoc(collection(db, `users/${uid}/purchases`), {
        data,
      });

      dispatch(setPurchase({ ...data, id: docRef.id }));
    } catch (error) {
      throw error;
    }
  };
};
