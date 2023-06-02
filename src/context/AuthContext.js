import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";

import "../firebase";
const AuthContext = React.createContext();

export default function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);
  // Signup Function
  async function signup(username, email, password) {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password);

    // Update Profile
    await updateProfile(auth.currentUser, {
      displayName: username,
    });
    const user = auth.currentUser;
    setCurrentUser({ ...user });
  }
  // Signin Function
  function signin(email, password) {
    const auth = getAuth();

    return signInWithEmailAndPassword(auth, email, password);
  }
  // Signout Function
  function signout() {
    const auth = getAuth();
    return signOut(auth);
  }

  const value = { currentUser, signup, signin, signout };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
