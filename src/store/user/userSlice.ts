import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface PurchaseData {
  date: Date;
  store: string;
  trackingNumber: string;
  amount: number;
}

const initialState = {
  purchases: [] as PurchaseData[],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setPurchase: (state, action: PayloadAction<PurchaseData>) => {
      state.purchases.push(action.payload);
    },
  },
});

export const { setPurchase } = userSlice.actions;
export default userSlice.reducer;
