import React, { useState } from "react";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import picture from "../assets/blank-profile.png";
import "react-calendar/dist/Calendar.css";
import "./Dashboard.css";

const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const onDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <div className='Dashboard'>
      <div className='container'>
        <h2 className='heading'>Dashboard</h2>
        <div className='data'>
          <div className='user-info'>
            <img src={picture} alt='profile' />
            <Link to='/edit-picture' className='edit-picture'>
              Edit profile picture
            </Link>
            <h2 className='username'>Username</h2>
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
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
