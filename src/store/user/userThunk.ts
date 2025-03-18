import { AppDispatch, RootState } from "@store/store";
import { collection, addDoc, doc, setDoc, getDoc, deleteDoc, updateDoc, orderBy, query, onSnapshot } from "firebase/firestore";
import { db } from "@/firebase/config";
import { loadPurchases, PurchaseData, setAnnualQuota, setIsEditing } from "./userSlice";

export const createNewPurchaseThunk = (data: PurchaseData) => {
  return async (_dispatch: AppDispatch, getState: () => RootState) => {
    try {
      const { uid } = getState().auth.auth;
      if (!uid) return;

      await addDoc(collection(db, `users/${uid}/purchases`), {...data} );
    } catch (error) {
      console.error(error)
      throw error;
    }
  };
};

export const readPurchasesThunk = () => {
  return (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      const { uid } = getState().auth.auth;
      if (!uid) return;

      const purchasesRef = collection(db, `users/${uid}/purchases`);
      const purchasesQuery = query(purchasesRef, orderBy("date", "desc"));
      
      onSnapshot(purchasesQuery, (querySnapshot) => {
          const purchases: PurchaseData[] = querySnapshot.docs.map((docSnap) => {
            const { date, store, trackingNumber, amount } = docSnap.data() as PurchaseData;

            return {
              id: docSnap.id,
              date: date || "",
              store: store || "",
              trackingNumber: trackingNumber || "",
              amount: amount || 0,
            };
          });

          dispatch(loadPurchases(purchases));
        }
      );
    } catch (error) {
      console.log(error)      
      throw error;
    }
  };
};

export const updatePurchaseThunk = (purchaseId: string, data: PurchaseData) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      const { uid } = getState().auth.auth;
      if (!uid) return;

      const purchaseRef = doc(db, `users/${uid}/purchases/${purchaseId}`);
      dispatch(setIsEditing(true));
      await updateDoc(purchaseRef, { ...data });
      dispatch(setIsEditing(false));
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};

export const deletePurchaseThunk = (purchaseId: string) => {
  return async (_dispatch: AppDispatch, getState: () => RootState) => {
    try {
      const { uid } = getState().auth.auth;
      if (!uid) return;

      const purchaseRef = doc(db, `users/${uid}/purchases/${purchaseId}`);
      await deleteDoc(purchaseRef);
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
      if (!uid) return;
      
      setDoc(doc(db, "users", `${uid}`), { annualQuota: amount }, { merge: true });
      dispatch(setAnnualQuota(amount));
    } catch (error) {
      console.error(error)
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
