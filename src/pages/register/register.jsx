import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  signInWithGoogle,
  createUserDocument,
  signInWithGoogleRedirect,
  auth,
} from "../../config/firebase/firebase.config";

const Register = () => {
  useEffect(() => {
    async function getData() {
      const response = await getRedirectResult(auth);
      console.log(response);
    }
    getData();
  }, []);

  const logWithGoogle = async () => {
    const { user } = await signInWithGoogle();
    const response = await createUserDocument(user);
    console.log(response);
  };

  const logWithGoogleRedirect = async () => {
    const { user } = await signInWithGoogleRedirect();
    console.log({ user });
  };
  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={logWithGoogle}>Sign in</button>
      <button onClick={logWithGoogleRedirect}>Sign in with redirect</button>
    </div>
  );
};

export default Register;
