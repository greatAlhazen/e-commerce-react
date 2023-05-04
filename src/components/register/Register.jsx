import Input from "../input/Input";
import Button from "../button/Button";
import {
  createUserDocument,
  createUserWithSignUp,
} from "../../config/firebase/firebase.config";
import { useState, useContext } from "react";
import { UserContext } from "../../contexts/user.context";

const defFormFields = {
  username: "",
  email: "",
  password: "",
};

const Register = () => {
  const [formFields, setFormFields] = useState(defFormFields);
  const [error, setError] = useState("");
  const { username, email, password } = formFields;

  const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defFormFields);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    resetFormFields();

    try {
      const { user } = await createUserWithSignUp(email, password);
      await createUserDocument(user, { displayName: username });
      setError("");
      setCurrentUser(user);
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        setError("Email already exists");
      } else if (err.code === "auth/weak-password") {
        setError("Password should be at least 6 characters");
      } else {
        setError("Something went wrong");
      }
    }
  };

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <form onSubmit={handleFormSubmit} className="form">
      <h1 className="form__title">Sign Up</h1>
      <div className="form__container">
        <Input
          type="text"
          id="username"
          label="Username"
          name="username"
          value={username}
          onChange={handleInputChange}
        />
        <Input
          type="email"
          id="password"
          label="Email"
          name="email"
          value={email}
          onChange={handleInputChange}
        />
        <Input
          type="password"
          id="password"
          label="Password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
        <span className="form__error">{error}</span>
        <Button type="submit" cls="" buttonText="Sign Up" />
      </div>
    </form>
  );
};

export default Register;
