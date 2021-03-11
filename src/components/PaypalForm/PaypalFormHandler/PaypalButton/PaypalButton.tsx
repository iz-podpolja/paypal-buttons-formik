import React from 'react';

import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';

function PaypalButton({
  onPaypalClicked,
}: {
  onPaypalClicked: () => Promise<string>;
}): JSX.Element {
  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "AeUdC66mogrO5TRQ44MxbeXsW25FlL80eIxkJmeRKeQ6z_xC6D89vwsCFEvaYZUmqWmt51P1kQ74ZO9d",
        vault: true,
      }}
    >
      <PayPalButtons createBillingAgreement={onPaypalClicked}></PayPalButtons>
    </PayPalScriptProvider>
  );
}

export default PaypalButton;
