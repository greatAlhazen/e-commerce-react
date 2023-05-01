import Login from "../../components/login/Login";
import Register from "../../components/register/Register";
import "./form.styles.scss";

const Form = () => {
  return (
    <div className="form-container">
      <Login />
      <Register />
    </div>
  );
};

export default Form;
