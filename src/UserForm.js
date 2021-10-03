// step 1

import React from 'react';

export default function App() {
  return (
    <>
      <div className="container ">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-6 ">
            <form id="msform">
              <fieldset>
                <h2 className="fs-title">Personal Details</h2>
                <h3 className="fs-subtitle">........</h3>
                <input type="text" name="fname" placeholder="First Name" />
                <input type="text" name="lname" placeholder="Last Name" />
                <input type="text" name="email" placeholder="Email Address" />
                <input
                  type="button"
                  name="next"
                  className="next action-button"
                  value="Next"
                />
              </fieldset>
              <fieldset>
                <h2 className="fs-title">Social Profiles</h2>
                <h3 className="fs-subtitle">
                  Your presence on the social network
                </h3>
                <input type="text" name="twitter" placeholder="Twitter" />
                <input type="text" name="facebook" placeholder="Facebook" />
                <input type="text" name="gplus" placeholder="Google Plus" />
                <input
                  type="button"
                  name="previous"
                  className="previous action-button-previous"
                  value="Previous"
                />
                <input
                  type="button"
                  name="next"
                  className="next action-button"
                  value="Next"
                />
              </fieldset>
              <fieldset>
                <h2 className="fs-title">Create your account</h2>
                <h3 className="fs-subtitle">Fill in your credentials</h3>
                <input type="text" name="email" placeholder="Email" />

                <input
                  type="button"
                  name="previous"
                  className="previous action-button-previous"
                  value="Previous"
                />
                <input
                  type="submit"
                  name="submit"
                  className="submit action-button"
                  value="Submit"
                />
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
