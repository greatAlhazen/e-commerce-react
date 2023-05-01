import "./button.styles.scss";

const Button = ({ cls, buttonText, ...other }) => {
  return (
    <button className={`btn btn--${cls}`} {...other}>
      {buttonText}
    </button>
  );
};

export default Button;
