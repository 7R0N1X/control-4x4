import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  user: {};
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: {
    uid: "",
    displayName: "",
    email: "",
    photoURL: "",
    errorMessage: "",
  },
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },

    setAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { setUser, setAuthenticated } = authSlice.actions;
export default authSlice.reducer;
