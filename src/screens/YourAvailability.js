import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";
import "./YourAvailability.css";

import availability from "../data/availability";

const YourAvailability = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const onDateChange = date => {
    console.log("onDateChange", date);
    setSelectedDate(date);
  };

  const getTileContent = (date, view) => {
    
    if(checkDateAvailable(date.date)){
    return (
      <div className='CircleWrapper'>
        <p className='AvailConfirm'></p>
      </div>
    )} else {
      return (
      <div className='CircleWrapper'>
        <p className='AvailNone'></p>
      </div>

      )
    };
  };

  const checkDateAvailable = (date) => {
    for(let availString of availability){
      const availDate = new Date(availString)
      if(availDate.getDate() === date.getDate()
      && availDate.getMonth() === date.getMonth()
      && availDate.getFullYear() === date.getFullYear())
        return true
    }
    return false
  }

  return (
    <div className='YourAvail'>
      <div className='container'>
        <h2 className='heading'>Your availability</h2>
        <p className='sub-heading'>
          Click on a day to enter your availability for the month{" "}
        </p>
        <div className='calender-container'>
          <Calendar
            className='calender'
            onClickDay={onDateChange}
            value={selectedDate}
            tileClassName='calender-tile'
            tileContent={getTileContent}
          />
        </div>
      </div>
    </div>
  );
};

export default YourAvailability;
