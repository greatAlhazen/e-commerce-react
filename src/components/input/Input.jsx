import "./input.styles.scss";

const Input = ({ label, type, id }) => {
  return (
    <div className="form-box">
      <input type={type} id={id} className="form-box__input" required />
      <label htmlFor={id} className="form-box__label">
        {label}
      </label>
    </div>
  );
};

export default Input;
