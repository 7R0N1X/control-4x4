import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AuthData {
  uid: string | null;
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
  errorMessage: string | null;
}

export interface AuthState {
  auth: AuthData;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  auth: {
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
    setLogIn: (state, action: PayloadAction<any>) => {
      state.auth = action.payload;
    },

    setLogOut: (state, action: PayloadAction<string | undefined>) => {
      state.auth = {
        ...initialState.auth,
        errorMessage: action.payload || null,
      };
    },

    setAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { setLogIn, setLogOut, setAuthenticated } = authSlice.actions;
export default authSlice.reducer;
