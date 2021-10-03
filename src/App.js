import React, { useState } from 'react';
import UserForm from './UserForm';
import DetailForm from './DetailForm';
import Confirm from './Confirm';
import Success from './Success';

export default function App() {
  // Default Step  1
  const [step, setStep] = useState(1);

  // Next Logic
  const nextStep = () => {
    setStep(step + 1);
  };

  // Previous Logic
  const pervStep = () => {
    setStep(step - 1);
  };

  return (
    <>
      {/* {console.log(step)} */}
      <h1 className="text-center">Multi Step Form</h1>
      {(() => {
        switch (step) {
          case 1:
            return <UserForm nextHook={nextStep} />;
          case 2:
            return <DetailForm nextHook={nextStep} prevHook={pervStep} />;
          case 3:
            return <Confirm nextHook={nextStep} prevHook={pervStep} />;
          case 4:
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
