import Input from "../input/Input";
import Button from "../button/Button";
import {
  signInWithGoogle,
  signInWithForm,
} from "../../config/firebase/firebase.config";
import { useState } from "react";

const defFormFields = {
  email: "",
  password: "",
};

const Login = () => {
  const [formFields, setFormFields] = useState(defFormFields);
  const [error, setError] = useState("");
  const { email, password } = formFields;

  const logginWithGoogle = async () => {
    await signInWithGoogle();
  };

  const resetFormFields = () => {
    setFormFields(defFormFields);
  };

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user } = await signInWithForm(email, password);
      resetFormFields();
      setError("");
    } catch (err) {
      if (
        err.code === "auth/wrong-password" ||
        err.code === "auth/user-not-found"
      ) {
        setError("Wrong credentials");
      } else {
        setError("Something went wrong");
        console.log(err);
      }
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="form">
      <h1 className="form__title">Sign In</h1>
      <div className="form__container">
        <Input
          type="email"
          onChange={handleInputChange}
          name="email"
          value={email}
          id="email"
          label="Email"
        />
        <Input
          type="password"
          id="password"
          onChange={handleInputChange}
          name="password"
          value={password}
          label="Password"
        />
        <Button cls="" buttonText="Sign In" type="submit" />
        <Button
          onClick={logginWithGoogle}
          type="button"
          cls="2"
          buttonText="Sign In With Google"
        />
        <span className="form__error">{error}</span>
      </div>
    </form>
  );
};

export default Login;
