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
      // orders: [],
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

export const getAdminProducts = async (numOfProducts = 10) => {
  try {
    const productsRef = collection(firestoreDb, 'products');
    const q = query(
      productsRef,
      where('deleted', '==', 0),
      orderBy('created', 'desc'),
      limit(numOfProducts)
    );
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

export const deleteProductById = async (id) => {
  try {
    const docRef = doc(firestoreDb, 'products', id);
    await setDoc(docRef, { deleted: 1, updated: Date.now() }, { merge: true });
    return { es: 0, message: 'Product Deleted Successfully' };
  } catch (error) {
    console.log(error);
    return { es: 1, message: 'Failed to Delete product. Please try again.' };
  }
};

export const getProductById = async (id) => {
  const docRef = doc(firestoreDb, 'products', id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log('No such document!');
    return null;
  }
};

export const updateProductById = async (product, id) => {
  try {
    const docRef = doc(firestoreDb, 'products', id);
    const res = await setDoc(docRef, { ...product, updated: Date.now() }, { merge: true });
    return res;
  } catch (error) {
    console.log(error);
  }
};

// TODO: make it a transaction, to update entries everywhere or failed entirly
export const createOrder = async (user, orders, amount) => {
  try {
    // Create a new order document
    const orderRef = await addDoc(collection(firestoreDb, 'orders'), {
      userid: user.uid,
      email: user.email,
      amount: amount,
      created: Date.now(),
      products: orders,
    });

    // TODO: try to implement using relationships
    // Add the order reference to the user document
    // const userRef = doc(firestoreDb, 'users', user.uid);
    // await updateDoc(userRef, { orders: arrayUnion({ orderRef }) });

    // Add product references to the order
    // for (const product of orders) {
    //   // Get the product document reference
    //   const productRef = doc(firestoreDb, 'products', product.id);
    //   // Add the product reference to the order
    //   await updateDoc(orderRef, { products: arrayUnion({ productRef }) });
    // }

    return { es: 0, message: 'Order Placed successfully' };
  } catch (error) {
    console.log(error);
  }
};

export const getOrdersForUser = async (user, numberOfOrders = 10) => {
  try {
    const ordersRef = collection(firestoreDb, 'orders');
    const q = query(
      ordersRef,
      where('userid', '==', user.uid),
      orderBy('created', 'desc'),
      limit(numberOfOrders)
    );
    const querySnapshot = await getDocs(q);
    const orders = [];
    querySnapshot.forEach((doc) => {
      orders.push({ ...doc.data(), id: doc.id });
    });
    
    return { es: 0, orders };
  } catch (error) {
    console.log(error);
    return { es: 1, message: 'Failed to get orders. Please try again.' };
  }
};
