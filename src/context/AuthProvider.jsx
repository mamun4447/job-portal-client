import { createContext, useEffect, useState } from "react";
import auth from "./../services/firebase.init";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import axios from "axios";
import useAxiosSecure from "../hooks/useAxiosSecure";

const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //===>LogIn with Email & Pass<====//
  const userLogIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //===> Google SignIn<===//
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //===>Sign Out<====//
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  //===>set users<===//
  // const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      const user = { email: currentUser?.email };
      if (currentUser?.email) {
        axios
          .post("http://localhost:5000/jwt", user, { withCredentials: true })
          .then((res) => {
            setLoading(false);
            // console.log(res.data);
          });
      } else {
        axios
          .post("http://localhost:5000/logout", {}, { withCredentials: true })
          .then((res) => {
            // console.log(res.data);
            setLoading(false);
          });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    userLogIn,
    googleSignIn,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
