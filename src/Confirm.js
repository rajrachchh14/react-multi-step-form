// Step 3
import React from 'react';

export default function Confirm({ nextHook, prevHook, Value }) {
  const { Fnm, Lnm, Email, Twitter, Facebook, Instagram } = Value.FormData;
  const next = () => {
    nextHook();
  };

  const prev = () => {
    prevHook();
  };
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-6 ">
            <form id="msform">
              <fieldset>
                <h2 className="fs-title">Confirm</h2>
                <h3 className="fs-subtitle">Step - 3</h3>
                <ul className="list-group text-start">
                  <li className="list-group-item list-group-item-secondary">
                    First Name : {Fnm}
                  </li>
                  <li className="list-group-item list-group-item-secondary">
                    Last Name : {Lnm}
                  </li>

                  <li className="list-group-item list-group-item-secondary">
                    Email : {Email}
                  </li>
                  <li className="list-group-item list-group-item-secondary">
                    Twitter : {Twitter}
                  </li>
                  <li className="list-group-item list-group-item-secondary">
                    Facebook : {Facebook}
                  </li>
                  <li className="list-group-item list-group-item-secondary">
                    Instagram : {Instagram}
                  </li>
                </ul>
                <button
                  type="button"
                  name="previous"
                  className="previous action-button-previous"
                  onClick={prev}
                >
                  Previous
                </button>

                <button
                  type="button"
                  name="next"
                  className="next action-button"
                  onClick={next}
                >
                  Next
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
