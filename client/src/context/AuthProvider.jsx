import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  reauthenticateWithCredential,
  EmailAuthProvider,
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
  //!RE-AUTH
  const reAuth = (email, password) => {
    const credential = EmailAuthProvider.credential(email, password);
    return reauthenticateWithCredential(user, credential);
  };
  //! LISTEN TO CHANGES IN USER FIREBASE : TRIGGERED WHEN SING IN , SIGN OUT , REGISTER...etc
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setTokenHeader(currentUser?.accessToken);
      setLoading(false);
      console.log(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const values = { createUser, logIn, logout, user, reAuth };
  return (
    <AuthContext.Provider value={values}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
