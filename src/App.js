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
    Twitter: '',
    Facebook: '',
    Instagram: '',
  });

  // Next Logic
  const nextStep = () => {
    setStep(step + 1);
    if (step === 3) {
      // This All alert Data Will Be Send In Data Base , Base On Steps
      alert('This All Data Send In DataBase');
      alert('First Name : ' + FormData.Fnm + '  Last Name : ' + FormData.Lnm);
    }
  };

  // Previous Logic
  const pervStep = () => {
    setStep(step - 1);
  };

  const ChangeEvent = (InputEventHook) => (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [InputEventHook]: e.target.value,
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
                InputEventHook={ChangeEvent}
                Value={{ FormData }}
              />
            );
          case 2:
            return (
              <DetailForm
                nextHook={nextStep}
                prevHook={pervStep}
                InputEventHook={ChangeEvent}
                Value={{ FormData }}
              />
            );
          case 3:
            return (
              <Confirm
                nextHook={nextStep}
                prevHook={pervStep}
                Value={{ FormData }}
              />
            );
          case 4:
            return <Success />;

          default:
            return <h1>No project match</h1>;
        }
      })()}
    </>
  );
}
