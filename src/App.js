import React, { useState } from 'react';
import UserForm from './UserForm';
import DetailForm from './DetailForm';
import Confirm from './Confirm';
import Success from './Success';

export default function App() {
  // Default Step  1
  const [step, setStep] = useState(1);
  // User Datas
  const [FormData, setFormData] = useState({
    Fnm: '',
    Lnm: '',
    Email: '',
  });

  // Next Logic
  const nextStep = () => {
    setStep(step + 1);
    // if step 3 whole data submit and Alert
  };

  // Previous Logic
  const pervStep = () => {
    setStep(step - 1);
  };

  const ChangeEvent = (InputEvent) => (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [InputEvent]: e.target.value,
    }));
  };

  return (
    <>
      <h1 className="text-center">Multi Step Form</h1>
      {(() => {
        switch (step) {
          case 1:
            return (
              <UserForm
                nextHook={nextStep}
                InputEvent={ChangeEvent}
                Value={{ FormData }}
              />
            );
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
    </>
  );
}
