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
  availableBalance: 0,
  totalImported: 0,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loadPurchases: (state, action: PayloadAction<PurchaseData[]>) => {
      state.purchases = action.payload;
    },

    setPurchase: (state, action: PayloadAction<PurchaseData>) => {
      state.purchases.unshift(action.payload);
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

    setAvailableBalance: (state) => {     
      const availableBalance = state.annualQuota - state.totalImported;
      if (availableBalance < 0) {
        state.availableBalance = 0;
      } else {
        state.availableBalance = availableBalance;  
      }
    },

    setTotalImported: (state, action: PayloadAction<PurchaseData[]>) => {
      state.totalImported = action.payload.reduce((acc, purchase) => acc + purchase.amount, 0);
    },
  },
});

export const { loadPurchases, setPurchase, setAnnualQuota, setPurchaseEdit, setIsEditing, setAvailableBalance, setTotalImported } =  userSlice.actions;
export default userSlice.reducer;
