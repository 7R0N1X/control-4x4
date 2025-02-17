import { AppDispatch, RootState } from "@store/store";
import { collection, addDoc, getDocs, doc, setDoc } from "firebase/firestore/lite";
import { db } from "@/firebase/config";
import { loadPurchases, PurchaseData, setAnnualQuota, setPurchase } from "./userSlice";

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

      const purchases: PurchaseData[] = querySnapshot.docs.map((docSnap) => {
        const data = docSnap.data();

        return {
          id: docSnap.id,
          date: data.date ? new Date(data.date).toLocaleDateString() : "",
          store: data.store || "",
          trackingNumber: data.trackingNumber || "",
          amount: data.amount || 0,
        };
      });

      dispatch(loadPurchases(purchases));
    } catch (error) {
      throw error;
    }
  };
};

export const setAnnualQuotaThunk = (amount: number) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      const { uid } = getState().auth.auth;
      setDoc(doc(db, "users", `${uid}`),
        { annualQuota: amount },
        { merge: true },
      );
      dispatch(setAnnualQuota(amount));
    } catch (error) {
      throw error;
    }
  };
};
