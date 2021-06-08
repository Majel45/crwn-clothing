import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import './stripe-button.styles.scss';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51J00EsAktKPzhzawSXOlWH6a4tCctw6HtijJyoVKl9JcmaYaoxRfGJy3baaZMSqwdf0GUoUP1Ntc6hbKzVFVERB2008QecwwAg";
  
  const onToken = token => {
    console.log(token);
    alert = ('Payment Successful');
  }
  
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/en/f3eb2117da"
      description={`Your total is €${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
      allowRememberMe
    />
  );
};

export default StripeCheckoutButton;