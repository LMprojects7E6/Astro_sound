import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  reauthenticateWithCredential,
  EmailAuthProvider,
  updateProfile,
  updateEmail,
  updatePassword,
  fetchSignInMethodsForEmail,
  sendPasswordResetEmail,
  getIdToken,
} from "firebase/auth";
import { auth } from "services/firebase";
import { setTokenHeader } from "api/api";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  //!CREATE USER FIREBASE
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //!LOGIN WITH FIREBASE
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //!LOGOUT WITH FIREBASE
  const logout = () => {
    return signOut(auth);
  };
  //!UPDATE EMAIL
  const updateEmailProfile = (email) => {
    return updateEmail(auth.currentUser, email);
  };
  //!CHECK IF EMAIL EXIST ON UPDATE
  const checkIfEmailExist = (newEmail) => {
    return fetchSignInMethodsForEmail(auth, newEmail);
  };
  //!UPDATE PHOTO URL
  const updatePhotoUrlProfile = (photoURL) => {
    return updateProfile(auth.currentUser, { photoURL: photoURL });
  };

  //!UPDATE PASSWORD
  const updatePasswordProfile = (password) => {
    return updatePassword(auth.currentUser, password);
  };
  //! RESET EMAIL
  const forgotPassword = (email) => {
    const config = {
      url: process.env.REACT_APP_FORGOT_PASSWORD_REDIRECT,
      handleCodeInApp: true,
    };
    return sendPasswordResetEmail(auth, email, config);
  };
  //!RE-AUTH
  const reAuth = (email, password) => {
    const credential = EmailAuthProvider.credential(email, password);
    return reauthenticateWithCredential(user, credential);
  };

  //!VERIFY TOKEN EXPIRATION
  const verifyTokenExpiration = () => {
    return getIdToken(auth.currentUser);
  };
  //! LISTEN TO CHANGES IN USER FIREBASE : TRIGGERED WHEN SING IN , SIGN OUT , REGISTER...etc
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setTokenHeader(currentUser?.accessToken);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const values = {
    user,
    createUser,
    logIn,
    logout,
    reAuth,
    updateEmailProfile,
    updatePhotoUrlProfile,
    updatePasswordProfile,
    checkIfEmailExist,
    forgotPassword,
    verifyTokenExpiration,
  };
  return (
    <AuthContext.Provider value={values}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
