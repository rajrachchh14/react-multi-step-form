// step 1
import React, { useState } from 'react';

export default function App({ nextHook, Input, Value }) {
  const [Email, setEmail] = useState('');

  const { Fnm, Lnm } = Value.FormData;
  console.log(Fnm, 's');
  console.log(Value.FormData, 'input');
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
                  // value={Fnm}
                  onChange={Input}
                  value={Fnm}
                  name="fname"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  onChange={Input}
                  value={Lnm}
                  name="lname"
                  placeholder="Last Name"
                />
                <input
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
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
