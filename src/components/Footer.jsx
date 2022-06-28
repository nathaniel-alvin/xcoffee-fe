import React from "react";
import "../styles/footer.css";

function Footer() {
  return (
    <div className="main_footer">
      <div className="container">
        <div className="row">
          {/* Col 1 */}
          <div className="col">
            <h4>X-COFFEE INC</h4>
            <ul className="list">
              <li>0818-1234-1234</li>
              <li>DKI Jakarta, Indonesia</li>
              <li>Jl. Pulau Baru 240</li>
              <li>08:00 - 24:00</li>
            </ul>
          </div>
          {/* Col 2 */}
          <div className="col">
            <h4>SOCIALS</h4>
            <ul className="list">
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Twitter</li>
            </ul>
          </div>
          {/* Col 3 */}
          <div className="col">
            <h4>X-COFFEE History</h4>
            <p>
              X-COFFEE is the best coffee cafe in town. It has been around for
              40 years. We are known for our special coffee taste.
            </p>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-foot">
            &copy;{new Date().getFullYear()} X-COFFEE INC | All rights reserved
            | Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
