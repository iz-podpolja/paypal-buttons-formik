import { Field, Form, Formik } from 'formik';
import React from 'react';

import { PaypalFormHandler } from './PaypalFormHandler';
import { FormValues } from './types';

function PaypalForm(): JSX.Element {
  return (
    <Formik<FormValues>
      initialValues={{ whatever: "" }}
      onSubmit={v => {
        console.log("submit", v);
      }}
    >
      <Form>
        <Field className="tw-text-black" name="whatever" type="text" />
        <PaypalFormHandler />
      </Form>
    </Formik>
  );
}

export default PaypalForm;
