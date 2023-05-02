import "./input.styles.scss";

const Input = ({ label, type, id, ...other }) => {
  return (
    <div className="form-box">
      <input
        type={type}
        id={id}
        className="form-box__input"
        required
        {...other}
      />
      <label htmlFor={id} className="form-box__label">
        {label}
      </label>
    </div>
  );
};

export default Input;
