import { FormikValues, useFormikContext } from 'formik';
import React, { useCallback, useEffect, useRef } from 'react';

import { FormValues } from '../types';
import { PaypalButton } from './PaypalButton';

type Props = {};

async function apiCall(values: FormValues | null): Promise<string> {
  console.log("in apiCall", values);
  return new Promise<string>(resolve => {
    setTimeout(() => {
      console.log("call ended");
      resolve("EC-9RY2628262462061J");
    }, 1000);
  });
}

function usePaypalCallback<T extends FormikValues>(
  fetchECToken: (values: T | null) => Promise<string>
) {
  const ctx = useFormikContext<T>();
  const ref = useRef<T | null>(null);

  useEffect(() => {
    ref.current = ctx.values;
  }, [ctx.values]);

  const onPaypalClicked = useCallback(async () => {
    const res = await ctx
      .submitForm()
      .then(() => Promise.resolve(ref.current))
      .then(fetchECToken);
    return res;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return onPaypalClicked;
}

function PaypalFormHandler(_: Props) {
  const onPaypalClicked = usePaypalCallback(apiCall);
  return <PaypalButton onPaypalClicked={onPaypalClicked}></PaypalButton>;
}

export default PaypalFormHandler;
