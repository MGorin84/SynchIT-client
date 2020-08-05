import React, {useState} from "react";
import {useGlobalState} from "../config/store";
import "./CancelMembership.css";
import {deleteUser} from '../services/userServices'

const CancelMembership = ({history}) => {

  const {store} = useGlobalState();
  const {loggedInUser, memberData} = store;

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(memberData)
    deleteUser(memberData).then((userData) => {
      console.log(userData)
      history.push("/confirm-cancellation")
    })
    .catch((error) => {
      console.log(error.message)
      // dispatch ({
      //   type: "setAvailability",
      //   data: originalAvailability
      // })
    })

  }


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
            <button to='/confirm-cancellation' onClick={handleSubmit}>Cancel membership</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CancelMembership;
