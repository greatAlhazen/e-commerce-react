import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "greatalhazen-ecommerce.firebaseapp.com",
  projectId: "greatalhazen-ecommerce",
  storageBucket: "greatalhazen-ecommerce.appspot.com",
  messagingSenderId: "396246981582",
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGoogle = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createCollectionsAndDocuments = async (collectionKey, objects) => {
  const batch = writeBatch(db);
  const collectionRef = collection(db, collectionKey);

  objects.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};

export const getDocumentAndCollections = async () => {
  const collectRef = collection(db, "categories");
  const q = query(collectRef);

  const querySnapshot = await getDocs(q);
  const categories = querySnapshot.docs.reduce((acc, document) => {
    const { title, items } = document.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categories;
};

export const createUserDocument = async (authUser, otherInfo = {}) => {
  const docUser = doc(db, "users", authUser.uid);
  const userSnapshot = await getDoc(docUser);

  if (!userSnapshot.exists()) {
    const { displayName, email } = authUser;
    const createdAt = new Date();

    try {
      await setDoc(docUser, {
        displayName,
        createdAt,
        email,
        ...otherInfo,
      });
    } catch (err) {
      console.log(`error is ${err}`);
    }
  }

  return docUser;
};

export const createUserWithSignUp = async (email, password) => {
  if (!email && !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInWithForm = async (email, password) => {
  if (!email && !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const authStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
