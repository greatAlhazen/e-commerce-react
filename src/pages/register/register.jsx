import {
  signInWithGoogle,
  createUserDocument,
} from "../../config/firebase/firebase.config";

const Register = () => {
  const logWithGoogle = async () => {
    const { user } = await signInWithGoogle();
    const response = await createUserDocument(user);
    console.log(response);
  };
  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={logWithGoogle}>Sign in</button>
    </div>
  );
};

export default Register;
