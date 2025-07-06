import { useState } from "react";
import AuthContext from "./AuthContext/AuthContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.init";

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const createUser = ( email, password) => {
    createUserWithEmailAndPassword(auth,email, password);
  };
  const authInfo = {
    user,
    loading,
    setUser,
    setLoading,
    createUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
