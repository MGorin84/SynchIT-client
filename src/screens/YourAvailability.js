import React, { useState } from "react";
import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";
import "./YourAvailability.css";

const YourAvailability = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const onDateChange = date => {
    setSelectedDate(date);
  };
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
            onChange={onDateChange}
            value={selectedDate}
            tileClassName='calender-tile'
          />
        </div>
      </div>
    </div>
  );
};

export default YourAvailability;
