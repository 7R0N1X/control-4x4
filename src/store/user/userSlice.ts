import { createSlice } from "@reduxjs/toolkit";
import Big from "big.js";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface PurchaseData {
  id: string;
  date: string;
  store: string;
  trackingNumber: string;
  amount: number;
}

const initialState = {
  purchases: [] as PurchaseData[],
  purchaseToEdit: [] as PurchaseData[],
  isEditing: false,
  annualQuota: 0,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loadPurchases: (state, action: PayloadAction<PurchaseData[]>) => {
      state.purchases = action.payload;
    },

    setPurchase: (state, action: PayloadAction<PurchaseData>) => {
      state.purchases.push(action.payload);
    },

    setAnnualQuota: (state, action: PayloadAction<number>) => {
      const annualQuota = new Big(action.payload);
      state.annualQuota = Number(annualQuota.toFixed(2));
    },

    setPurchaseEdit: (state, action: PayloadAction<string>) => {
      state.purchaseToEdit = state.purchases.filter((purchase) => purchase.id === action.payload);
    },

    setIsEditing: (state, action: PayloadAction<boolean>) => {
      state.isEditing = action.payload;
    },
  },
});

export const { loadPurchases, setPurchase, setAnnualQuota, setPurchaseEdit, setIsEditing } =
  userSlice.actions;
export default userSlice.reducer;
