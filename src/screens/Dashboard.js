import React, { useState } from "react";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import picture from "../assets/blank-profile.png";
import "react-calendar/dist/Calendar.css";
import "./Dashboard.css";
import {useGlobalState} from "../config/store"


const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const {store} = useGlobalState();
  const {loggedInUser, memberData} = store;

  if (!memberData) {
    return null
  }

  const {availability} = memberData


  const onDateChange = date => {
    setSelectedDate(date);
  };

  const getTileContent = (date, view) => {
    
    if(checkDateAvailable(date.date)) {
    return (
      <div className='CircleWrapperDash'>
        <p className='AvailConfirmDash'></p>
      </div>
    )} else {
      return (
      <div className='CircleWrapperDash'>
        <p className='AvailNoneDash'></p>
      </div>

      )
    };
  };

  const checkDateAvailable = (date) => {
    // console.log(date.toLocaleDateString("en-US"));
    // console.log(availability)
    for(let availString of availability){
      const availDate = new Date(availString)
      // console.log(availDate.toLocaleDateString("en-US"))
      if(availDate.getDate() === date.getDate()
      && availDate.getMonth() === date.getMonth()
      && availDate.getFullYear() === date.getFullYear())
        return true
    }
    return false
  }


  return (
    <div className='Dashboard'>
      <div className='container'>
        <h2 className='heading'>Dashboard</h2>
        <div className='data'>
          <div className='user-info'>
            <img src={picture} alt='profile' />
            {/* <Link to='/edit-picture' className='edit-picture'>
              Edit profile picture
            </Link> */}
            <h2 className='username'>{loggedInUser}</h2>
            <Link to='/your-availability' className='edit-availability'>
              Edit your availability
            </Link>
            <Link to='/your-team' className='team-availability'>
              Show team availability
            </Link>
            <Link to='/cancel-membership' className='cancel-membership'>
              Cancel your membership
            </Link>
          </div>
          <div className='calender-data'>
            <h2>Your availability</h2>
            <Calendar
              className='calender'
              onChange={onDateChange}
              value={selectedDate}
              tileClassName='calender-tile'
              tileContent={getTileContent}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
