import "./checkout.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/chekout-item/CheckoutItem";
import Payment from "../../components/payment/Payment";

const Checkout = () => {
  const { cartItems, total } = useContext(CartContext);

  return (
    <div className="checkout-box">
      <div className="checkout-box__header">
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
      <Payment />
    </div>
  );
};

export default Checkout;
