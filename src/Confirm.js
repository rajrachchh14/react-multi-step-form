// Step 3

import React from 'react';

export default function Confirm() {
  return (
    <>
      <div className="container ">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-6 ">
            <form id="msform">
              <fieldset>
                <h2 className="fs-title">Confirm</h2>
                <h3 className="fs-subtitle">.........</h3>
                <ul className="list-group text-start">
                  <li className="list-group-item list-group-item-secondary">
                    An item
                  </li>
                  <li className="list-group-item list-group-item-secondary">
                    A second item
                  </li>
                  <li className="list-group-item list-group-item-secondary">
                    A third item
                  </li>
                  <li className="list-group-item list-group-item-secondary">
                    A fourth item
                  </li>
                  <li className="list-group-item list-group-item-secondary">
                    And a fifth one
                  </li>
                </ul>
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
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
