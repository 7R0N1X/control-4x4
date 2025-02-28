import { AppDispatch } from "@store/store";
import { auth } from "@/firebase/config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail } from "firebase/auth";
import { setAuthenticated, setLogIn, setLogOut } from "./authSlice";
import { setAnnualQuota, setAvailableBalance, setIsEditing, setPurchaseEdit, setTotalImported } from "@store/user/userSlice";

export const createUserWithEmailAndPasswordThunk = (userName: string, userEmail: string, userPassword: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, userEmail, userPassword);
      auth.currentUser && (await updateProfile(auth.currentUser, { displayName: userName }));
      const { uid, displayName, email, photoURL } = userCredential.user;
      dispatch(setLogIn({ uid, displayName, email, photoURL }));
    } catch (error) {
      error instanceof Error && dispatch(setLogIn(error.message));
    }
  };
};

export const signInWithEmailAndPasswordThunk = (userEmail: string, userPassword: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, userEmail, userPassword);
      const { uid, displayName, email, photoURL } = userCredential.user;
      dispatch(setLogIn({ uid, displayName, email, photoURL }));
      dispatch(setAuthenticated(true));
    } catch (error) {
      error instanceof Error && dispatch(setLogIn(error.message));
    }
  };
};

export const signInWithGoogleThunk = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const provider = new GoogleAuthProvider().setCustomParameters({prompt: "select_account"});
      const userCredential = await signInWithPopup(auth, provider);
      const { uid, displayName, email, photoURL } = userCredential.user;
      dispatch(setLogIn({ uid, displayName, email, photoURL }));
      dispatch(setAuthenticated(true));
    } catch (error) {
      error instanceof Error && dispatch(setLogIn(error.message));
    }
  };
};

export const resetPasswordThunk = (email: string) => {
  return async () => {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error) {
      throw error;
    }
  };
};

export const logOut = () => {
  return async (dispatch: AppDispatch) => {
    try {
      await auth.signOut();
      dispatch(setLogOut());
      dispatch(setAuthenticated(false));
      dispatch(setPurchaseEdit(""))
      dispatch(setIsEditing(false))
      dispatch(setAnnualQuota(0))
      dispatch(setAvailableBalance())
      dispatch(setTotalImported([]))
    } catch (error) {
      error instanceof Error && dispatch(setLogOut(error.message));
    }
  };
};
