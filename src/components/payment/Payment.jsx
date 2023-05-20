import "./payment.styles.scss";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button from "../button/Button";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

const Payment = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [processPayment, setProcessPayment] = useState(false);

  const { currentUser } = useContext(UserContext);
  const { total } = useContext(CartContext);

  const handlePaymentForm = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    if (total <= 0) {
      alert("Please add product");
      return false;
    }

    setProcessPayment(true);

    const response = await fetch("/.netlify/functions/createPayment", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: total * 100 }),
    }).then((res) => res.json());
    const clientSecret = response.paymentIntent.client_secret;
    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser?.displayName || "Guest",
        },
      },
    });

    setProcessPayment(false);

    if (paymentResult.error) {
      alert(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment received successfully");
      }
    }
  };

  return (
    <div className="form-wrapper">
      <form className="form-wrapper__form" onSubmit={handlePaymentForm}>
        <CardElement />
        <Button
          isLoading={processPayment}
          cls="payment"
          buttonText="Pay now"
          type="submit"
        />
      </form>
    </div>
  );
};

export default Payment;
