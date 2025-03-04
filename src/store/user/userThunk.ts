import { AppDispatch, RootState } from "@store/store";
import { collection, addDoc, getDocs, doc, setDoc, getDoc, deleteDoc, updateDoc, orderBy, query } from "firebase/firestore/lite";
import { db } from "@/firebase/config";
import { loadPurchases, PurchaseData, setAnnualQuota, setIsEditing, setPurchase } from "./userSlice";

export const createNewPurchase = (data: any) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      const { uid } = getState().auth.auth;
      if (!uid) return;

      const docRef = await addDoc(collection(db, `users/${uid}/purchases`), data );
      const formatedDate = new Date(data.date).toLocaleDateString();
      dispatch(setPurchase({ ...data, date: formatedDate, id: docRef.id }));
    } catch (error) {
      console.error(error)
      throw error;
    }
  };
};

export const readPurchasesThunk = () => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      const { uid } = getState().auth.auth;
      if (!uid) return;

      const purchasesRef = collection(db, `users/${uid}/purchases`);
      const purchasesQuery = query(purchasesRef, orderBy("date", "desc"));
      const querySnapshot = await getDocs(purchasesQuery);

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
      console.error(error);
      throw error;
    }
  };
};

export const updatePurchaseThunk = (purchaseId: string, data: PurchaseData) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      const { uid } = getState().auth.auth;
      const purchaseRef = doc(db, `users/${uid}/purchases/${purchaseId}`);
      dispatch(setIsEditing(true));
      await updateDoc(purchaseRef, { ...data });
      dispatch(setIsEditing(false));
      dispatch(readPurchasesThunk());
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};

export const deletePurchaseThunk = (purchaseId: string) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      const { uid } = getState().auth.auth;
      const purchaseRef = doc(db, `users/${uid}/purchases/${purchaseId}`);
      await deleteDoc(purchaseRef);
      dispatch(readPurchasesThunk());
    } catch (error) {
      console.error(error)
      throw error;
    }
  };
};

export const setAnnualQuotaThunk = (amount: number) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      const { uid } = getState().auth.auth;
      setDoc(
        doc(db, "users", `${uid}`),
        { annualQuota: amount },
        { merge: true },
      );
      dispatch(setAnnualQuota(amount));
    } catch (error) {
      throw error;
    }
  };
};

export const getAnnualQuotaThunk = () => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      const { uid } = getState().auth.auth;
      const docRef = doc(db, "users", `${uid}`);
      const data = (await getDoc(docRef)).data();
      data && dispatch(setAnnualQuota(data.annualQuota));
    } catch (error) {
      throw error;
    }
  };
};
