import React, { useState } from "react";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import picture from "../assets/blank-profile.png";
import "react-calendar/dist/Calendar.css";
import "./YourTeam.css";

const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const onDateChange = date => {
    setSelectedDate(date);
  };

  // pull availability of all users and save in array
  // use that array to display availability

  // mvp - make circle green if anyone is available / red if none available

  return (
    <div className='Your-Team'>
      <div className='container'>
        <h2 className='heading'>Your Team</h2>
        <div className='data'>
          <div className='team-info'>
            <p> </p>
            <div className='team'>
              <div className='team-member'>
                <img src={picture} alt='profile' />
                {/* <p>Name</p> */}
              </div>
              <div className='team-member'>
                <img src={picture} alt='profile' />
                {/* <p>Name</p> */}
              </div>
              <div className='team-member'>
                <img src={picture} alt='profile' />
                {/* <p>Name</p> */}
              </div>
              <div className='team-member'>
                <img src={picture} alt='profile' />
                {/* <p>Name</p> */}
              </div>
            </div>
            {/* <p className='showall-text'>Show all availability</p> */}
          </div>
          <div className='calender-data'>
            <h2>Team availability</h2>
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
