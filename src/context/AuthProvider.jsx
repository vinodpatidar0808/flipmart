// AuthProvider.js
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { auth } from '../configs/firebase';
import { addUserToDb, getUserDetailFromId } from '../utils/firebase';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = async (email, password, name) => {
    setLoading(true);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      if (res.user) {
        // TODO: search for a solution on how to insert customField in profile
        await updateProfile(res.user, { displayName: name });
        await addUserToDb({
          name: name,
          email: email,
          uid: res.user.uid,
          isAdmin: false,
        });
      }
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  const loginUser = async (email, password) => {
    setLoading(true);
    const res = await signInWithEmailAndPassword(auth, email, password);
    if (res) {
      await getUserDetailFromId(res.user.uid);
    }
    return res;
  };

  const logOut = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authValue = {
    createUser,
    user,
    loginUser,
    logOut,
    loading,
  };

  return <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
