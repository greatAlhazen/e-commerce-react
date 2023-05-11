import "./checkout.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart";
import CheckoutItem from "../../components/chekout-item/CheckoutItem";

const Checkout = () => {
  const { cartItems, total } = useContext(CartContext);

  return (
    <div className="checkout-box">
      <div class="checkout-box__header">
        <div>
          <span>Product</span>
        </div>
        <div>
          <span>Description</span>
        </div>
        <div>
          <span>Quantity</span>
        </div>
        <div>
          <span>Price</span>
        </div>
        <div>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}

      <div className="checkout-box__total">TOTAL: ${total}</div>
    </div>
  );
};

export default Checkout;
