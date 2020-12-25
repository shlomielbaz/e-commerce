import React from "react";
import StripeCheckout from "react-stripe-checkout";

import "./stripe-button.styles.scss";
import * as PublishableKey from "../../keys/stripe.key";

const StripeCheckoutButton = ({ price }) => {
  // stripe takes the price in cents and the price passed in US dollars
  const priceForStripe = price * 100;
  const publishableKey = PublishableKey.key;

  const onToken = (token) => {
    alert("Payment Successfully");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      imageUrl="https://svgshare.com/i/CUz.svg"
      description={`Your total is: $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};
export default StripeCheckoutButton;
