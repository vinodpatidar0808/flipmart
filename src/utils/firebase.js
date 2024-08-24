import { doc, getDoc, setDoc } from 'firebase/firestore';
import { firestoreDb } from '../configs/firebase';

export const addUserToDb = async (user) => {
  // TODO: add user to db
  try {
    const docRef = doc(firestoreDb, 'users', user.uid);
    await setDoc(docRef, {
      ...user,
      created: Date.now(),
      updated: Date.now(),
      deleted: 0,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getUserDetailFromId = async (id) => {
  const docRef = doc(firestoreDb, 'users', id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log('No such document!');
    return null;
  }
};
