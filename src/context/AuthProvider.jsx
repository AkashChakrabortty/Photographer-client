import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { createContext } from "react";
import app from "../firebase/firebase.config";

export const userInfo = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const provider = new GoogleAuthProvider();

  const googleSignIn = () => {
    return signInWithPopup(auth, provider);
  };
  const authInfo = {
    googleSignIn,
  };
  return (
    <div>
      <userInfo.Provider value={authInfo}>{children}</userInfo.Provider>
    </div>
  );
};

export default AuthProvider;
