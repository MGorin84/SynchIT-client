import React from "react";
import { Link } from "react-router-dom";

import "./ConfirmCancellation.css";

const ConfirmCancellation = () => {
  return (
    <div className='ConfirmCancellation'>
      <h2>Membership successfully canceled</h2>

      <div className='ConfirmCancellation-msg'>
        <div>
          <h3>We're sorry to see you go.</h3>
          <h3>Good luck stay connected with us.</h3>
          <h4>I've made a terrible mistake</h4>
          <Link className='rejoin-btn' to='singin'>
            Rejoin
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ConfirmCancellation;
