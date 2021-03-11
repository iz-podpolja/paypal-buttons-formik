import { FormikContextType, FormikValues, useFormikContext } from 'formik';
import React, { useCallback, useEffect, useRef } from 'react';

import { FormValues } from '../types';
import { PaypalButton } from './PaypalButton';

type Props = {};

async function apiCall(values: FormValues | null): Promise<string> {
  console.log("in apiCall", values);
  return new Promise<string>(resolve => {
    setTimeout(() => {
      console.log("call ended");
      resolve("paypal_token");
    }, 1000);
  });
}

function useFormikValuesRef<T extends FormikValues>(ctx: FormikContextType<T>) {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    ref.current = ctx.values;
  }, [ctx.values]);
  return ref;
}
function PaypalFormHandler(_: Props) {
  const ctx = useFormikContext<FormValues>();
  const ref = useFormikValuesRef(ctx);
  const onPaypalClicked = useCallback(async () => {
    const res = await ctx
      .submitForm()
      .then(() => Promise.resolve(ref.current))
      .then(apiCall);
    return res;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <PaypalButton onPaypalClicked={onPaypalClicked}></PaypalButton>;
}

export default PaypalFormHandler;
