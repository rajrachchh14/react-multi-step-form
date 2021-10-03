// step 1
import React, { useState } from 'react';

export default function App() {
  const [Fnm, setFnm] = useState('');
  const [Lnm, setLnm] = useState('');
  const [Email, setEmail] = useState('');
  return (
    <>
      <div className="container ">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-6 ">
            <form id="msform">
              <fieldset>
                <h2 className="fs-title">Personal Details</h2>
                <h3 className="fs-subtitle">Step - 1</h3>
                <input
                  type="text"
                  onChange={(e) => setFnm(e.target.value)}
                  value={Fnm}
                  name="fname"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  onChange={(e) => setLnm(e.target.value)}
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
                <input
                  type="button"
                  name="next"
                  className="next action-button"
                  value="Next"
                />
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
