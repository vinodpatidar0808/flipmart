import { query } from 'firebase/database';
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  setDoc,
  where,
} from 'firebase/firestore';
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

export const addProductToDb = async (product) => {
  // TODO: add product to db
  try {
    // add doc creates a document and auto generates an id
    const docRef = await addDoc(collection(firestoreDb, 'products'), {
      ...product,
      created: Date.now(),
      updated: Date.now(),
      deleted: 0,
    });
    console.log('Document written with ID: ', docRef.id, docRef);
  } catch (error) {
    console.log(error);
  }
};

export const getAdminProducts = async () => {
  try {
    const productsRef = collection(firestoreDb, 'products');
    const q = query(productsRef, where('deleted', '==', 0), orderBy('created', 'desc'), limit(10));
    const querySnapshot = await getDocs(q);
    const products = [];
    querySnapshot.forEach((doc) => {
      products.push({ ...doc.data(), id: doc.id });
    });
    return products;
  } catch (error) {
    console.log(error);
    return [];
  }
};
