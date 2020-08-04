import React, {useState} from "react";
import {useGlobalState} from "../config/store";
import "./CancelMembership.css";

const CancelMembership = () => {

  const {store} = useGlobalState();
  const {loggedInUser, memberData} = store;

  // delete user

  // const deleteUser = 



  return (
    <div className='CancelMembership'>
      <h2>Cancel your membership</h2>

      <div className='CancelMembership-form'>
        <div>
          <h3>Please enter your details to confirm cancellation</h3>
          <form>
            <input type='email' placeholder='Email address' />
            <input type='Password' placeholder='Password' />
            <button to='/confirm-cancellation'>Cancel membership</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CancelMembership;
