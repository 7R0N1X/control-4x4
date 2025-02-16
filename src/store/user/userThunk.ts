import { AppDispatch, RootState } from "@store/store";
import { collection, addDoc, getDocs } from "firebase/firestore/lite";
import { db } from "@/firebase/config";
import { loadPurchases, setPurchase } from "./userSlice";

export const addNewPurchase = (data: any) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      const { uid } = getState().auth.auth;
      const docRef = await addDoc(
        collection(db, `users/${uid}/purchases`),
        data,
      );

      dispatch(setPurchase({ ...data, id: docRef.id }));
    } catch (error) {
      throw error;
    }
  };
};

export const getPurchases = () => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      const { uid } = getState().auth.auth;
      const purchasesRef = collection(db, `users/${uid}/purchases`);
      const querySnapshot = await getDocs(purchasesRef);

      const purchases: any[] = [];
      querySnapshot.forEach((docSnap: any) => {
        const _data = docSnap.data();
        const { data } = _data;
        purchases.push({ ...data, id: docSnap.id });
      });

      dispatch(loadPurchases(purchases));
    } catch (error) {
      throw error;
    }
  };
};
