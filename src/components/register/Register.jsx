import Input from "../input/Input";
import Button from "../button/Button";

const Register = () => {
  return (
    <form action="#" className="form">
      <h1 className="form__title">Sign Up</h1>
      <div className="form__container">
        <Input type="text" id="username" label="Username" />
        <Input type="email" id="password" label="Email" />
        <Input type="password" id="password" label="Password" />
        <Button type="submit" cls="" buttonText="Sign Up" />
      </div>
    </form>
  );
};

export default Register;
