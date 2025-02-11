import { auth } from "@/firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { setUser } from "./authSlice";
import { AppDispatch } from "@store/store";

export const createUserWithEmailAndPasswordThunk = (
  userName: string,
  userEmail: string,
  userPassword: string,
) => {
  return async (dispatch: AppDispatch) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        userEmail,
        userPassword,
      );
      auth.currentUser &&
        (await updateProfile(auth.currentUser, { displayName: userName }));
      const { uid, displayName, email, photoURL } = userCredential.user;
      dispatch(setUser({ uid, displayName, email, photoURL }));
    } catch (error) {
      error instanceof Error && dispatch(setUser(error.message));
    }
  };
};
