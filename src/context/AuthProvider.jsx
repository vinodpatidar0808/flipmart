// AuthProvider.js
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { ref, set } from 'firebase/database';
import { createContext, useEffect, useState } from 'react';
import { auth, database } from '../configs/firebase';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // async function writeUserData(userId, name, email) {
  //   await set(ref(database, 'users/' + userId), {
  //     username: name,
  //     email: email,
  //     isAdmin: false,
  //   });
  // }

  const createUser = async (email, password, name) => {
    setLoading(true);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      if (res.user) {
        const profileRes = await updateProfile(res.user, { displayName: name, isAdmin: false });
        console.log(profileRes);
        // await writeUserData(res.user.uid, name, email);
      }
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
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
