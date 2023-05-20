import "./button.styles.scss";

const Button = ({ cls, buttonText, isLoading, ...other }) => {
  return (
    <button disabled={isLoading} className={`btn btn--${cls}`} {...other}>
      {isLoading ? <span className="spinner"></span> : buttonText}
    </button>
  );
};

export default Button;
