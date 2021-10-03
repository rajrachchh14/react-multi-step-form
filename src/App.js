import React, { useState } from 'react';
import UserForm from './UserForm';
import DetailForm from './DetailForm';
import Confirm from './Confirm';
import Success from './Success';

export default function App() {
  const [step1, setstep1] = useState('');
  const nextStep = () => {
    console.log('next');
  };

  const pervStep = () => {
    console.log('next');
  };

  return (
    <>
      <h1 className="text-center">Multi Step Form</h1>
      {(() => {
        switch (step1) {
          case step1:
            return <UserForm />;
          case 'two':
            return <DetailForm />;
          case 'three':
            return <Confirm />;
          case 'four':
            return <Success />;

          default:
            return <h1>No project match</h1>;
        }
      })()}
      {/* <UserForm />
      <DetailForm />
      <Confirm />
      <Success /> */}
    </>
  );
}
