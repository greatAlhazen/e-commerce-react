import Input from "../input/Input";
import Button from "../button/Button";
import {
  signInWithGoogle,
  createUserDocument,
} from "../../config/firebase/firebase.config";

const Login = () => {
  const logginWithGoogle = async () => {
    const { user } = await signInWithGoogle();
    await createUserDocument(user);
  };

  return (
    <form action="#" className="form">
      <h1 className="form__title">Sign In</h1>
      <div className="form__container">
        <Input type="email" id="email" label="Email" />
        <Input type="password" id="password" label="Password" />
        <Button cls="" buttonText="Sign In" type="submit" />
        <Button
          onClick={logginWithGoogle}
          type="button"
          cls="2"
          buttonText="Sign In With Google"
        />
      </div>
    </form>
  );
};

export default Login;
