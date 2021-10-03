// step 1

import React from 'react';

export default function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <form id="msform">
                <ul id="progressbar">
                  <li className="active">Basic Details</li>
                  <li>More Profiles</li>
                  <li>Confirm</li>
                  <li>Success</li>
                </ul>

                <fieldset>
                  <h2 className="fs-title">Basic Details</h2>
                  <h3 className="fs-subtitle">
                    Tell us something more about you
                  </h3>
                  <input type="text" name="fname" placeholder="First Name" />
                  <input type="text" name="lname" placeholder="Last Name" />
                  <input type="text" name="phone" placeholder="Phone" />
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
                  <input type="password" name="pass" placeholder="Password" />
                  <input
                    type="password"
                    name="cpass"
                    placeholder="Confirm Password"
                  />
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
      </div>
    </>
  );
}
