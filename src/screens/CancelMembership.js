import React from "react";

import "./CancelMembership.css";

const CancelMembership = () => {
  return (
    <div className='CancelMembership'>
      <h2>Cancel your membership</h2>

      <div className='CancelMembership-form'>
        <div>
          <h3>Please enter your details to confirm cancellation</h3>
          <form>
            <input type='email' placeholder='Email address' />
            <input type='Password' placeholder='Password' />
            <button>Cancel membership</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CancelMembership;
