import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  user: {};
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: {
    uid: null,
    displayName: null,
    email: null,
    photoURL: null,
    errorMessage: null,
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
