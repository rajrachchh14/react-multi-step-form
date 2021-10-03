import React from 'react';
import UserForm from './UserForm';
import DetailForm from './DetailForm';
import Confirm from './Confirm';
import Success from './Success';

export default function App() {
  return (
    <>
      <h1 className="text-center">Multi Step Form</h1>
      <UserForm />
      <DetailForm />
    </>
  );
}
