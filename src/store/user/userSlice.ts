import { createSlice } from "@reduxjs/toolkit";
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
      state.annualQuota = action.payload;
    },
  },
});

export const { loadPurchases, setPurchase, setAnnualQuota } = userSlice.actions;
export default userSlice.reducer;
