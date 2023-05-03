import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "greatalhazensop.firebaseapp.com",
  projectId: "greatalhazensop",
  storageBucket: "greatalhazensop.appspot.com",
  messagingSenderId: "222770215801",
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
