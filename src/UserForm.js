// step 1
import React, { useState } from 'react';

export default function App({ nextHook, InputEventHook, Value }) {
  const { Fnm, Lnm, Email } = Value.FormData;

  const next = () => {
    nextHook();
  };

  return (
    <>
      <div className="container ">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-6 ">
            {/* {form tag} */}
            <div id="msform">
              <fieldset>
                <h2 className="fs-title">Personal Details</h2>
                <h3 className="fs-subtitle">Step - 1</h3>
                <input
                  type="text"
                  // onChange={(e) => setFnm(e.target.value)}
                  onChange={InputEventHook('Fnm')}
                  value={Fnm}
                  name="fname"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  onChange={InputEventHook('Lnm')}
                  value={Lnm}
                  name="lname"
                  placeholder="Last Name"
                />
                <input
                  type="text"
                  onChange={InputEventHook('Email')}
                  value={Email}
                  name="email"
                  placeholder="Email Address"
                />
                <button
                  type="button"
                  name="next"
                  className="next action-button"
                  onClick={next}
                >
                  Next
                </button>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
