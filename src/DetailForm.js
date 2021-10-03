// step 2
import React from 'react';

export default function DetailForm() {
  return (
    <>
      <div className="container ">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-6 ">
            <form id="msform">
              <fieldset>
                <h2 className="fs-title">More Detail</h2>
                <h3 className="fs-subtitle">.........</h3>
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
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
