import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/config";
import {
  setLogIn,
  setLogOut,
  setAuthenticated,
  setLoading,
} from "@store/auth/authSlice";
import { AppDispatch } from "@store/store";

export const authListener = (dispatch: AppDispatch) => {
  dispatch(setLoading(true));
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const { uid, displayName, email, photoURL } = user;
      dispatch(setLogIn({ uid, displayName, email, photoURL }));
      dispatch(setAuthenticated(true));
      dispatch(setLoading(false));
    } else {
      dispatch(setLogOut());
      dispatch(setAuthenticated(false));
      dispatch(setLoading(false));
    }
  });
};
