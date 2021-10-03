import React, { useState } from 'react';
import UserForm from './UserForm';
import DetailForm from './DetailForm';
import Confirm from './Confirm';
import Success from './Success';

export default function App() {
  const [FormData, setFormData] = useState({ fnm, lnm });

  return (
    <>
      <h1 className="text-center">Multi Step Form</h1>
      <UserForm />
      <DetailForm />
      <Confirm />
      <Success />
    </>
  );
}
