import "./cartItem.styles.scss";

const CartItem = ({ cartItem }) => {
  const { name, price, imageUrl, quantity } = cartItem;
  return (
    <div className="cart-item">
      <div className="cart-item__left">
        <img src={imageUrl} alt={name} className="cart-item__image" />
        <div className="cart-item__total">
          <h4 className="cart-item__price">
            ${price} <span className="cart-item__sign">x</span>
          </h4>
          <h4 className="cart-item__quantity">{quantity}</h4>
        </div>
      </div>

      <div className="cart-item__title">
        <h1>{name}</h1>
      </div>
    </div>
  );
};

export default CartItem;
