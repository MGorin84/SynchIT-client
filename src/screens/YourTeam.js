import React, { useState, useEffect } from "react";
import {useGlobalState} from "../config/store";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import picture from "../assets/blank-profile.png";
import "react-calendar/dist/Calendar.css";
import "./YourTeam.css";
import {getAllUsers} from "../services/userServices"


const YourTeam = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const {store, dispatch} = useGlobalState();
  const [allUserAvail, setAllUserAvail] = useState([]);

  const {memberData} = store
  const availability = memberData ? memberData.availability : null


  useEffect(() => {
    getAllUsers().then((userData)=>{
      setAllUserAvail(userData)
    }).catch((error)=>{
      console.log(error.message)
    })
  },[availability])

  if (!memberData) {
    return null
  }

  const displayTeam = () => {
    return (
    <div className='team-info'>
      <div className='team'>
        {allUserAvail.map((userData)=>{
          return(
          <div key={userData._id} className='team-member'>
              <img src={picture} alt='profile' />
              <p>{userData.username}</p>
          </div>   
          )     
        })}
      </div>
    </div>
      )
  }


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
    for(let userData of allUserAvail){
            console.log(userData)
      for(let availString of userData.availability){
        const availDate = new Date(availString)
        // console.log(availDate.toLocaleDateString("en-US"))
        if(availDate.getDate() === date.getDate()
        && availDate.getMonth() === date.getMonth()
        && availDate.getFullYear() === date.getFullYear())
          return true
      }
    }
    return false
  }

  return (
    <div className='Your-Team'>
      <div className='container'>
        <h2 className='heading'>Your Team</h2>
        <div className='data'>
          <div className='team-info'>
            <div className='team'>
              <div className='team-member'>
                {/* <p className='showall-text'>Show all availability</p> */}
                {displayTeam()}
              </div>
            </div>
          </div>
                <div className='calender-data'>
                  <h2>Team availability</h2>
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

export default YourTeam;
