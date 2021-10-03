// step 2
import React, { useState } from 'react';

export default function DetailForm({ nextHook, prevHook }) {
  const [Twitter, setTwitter] = useState('');
  const [Facebook, setFacebook] = useState('');
  const [Instagram, setInstagram] = useState('');
  const next = () => {
    nextHook();
  };
  const prev = () => {
    prevHook();
  };

  return (
    <>
      <div className="container ">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-6 ">
            <div id="msform">
              <fieldset>
                <h2 className="fs-title">More Detail</h2>
                <h3 className="fs-subtitle">Step - 2</h3>
                <input
                  type="text"
                  value={Twitter}
                  onChange={(e) => setTwitter(e.target.value)}
                  name="Twitter"
                  placeholder="Twitter"
                />
                <input
                  type="text"
                  value={Facebook}
                  onChange={(e) => setFacebook(e.target.value)}
                  name="Instagram"
                  placeholder="Instagram"
                />
                <input
                  type="text"
                  value={Instagram}
                  onChange={(e) => setInstagram(e.target.value)}
                  name="Instagram"
                  placeholder="Instagram"
                />
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
