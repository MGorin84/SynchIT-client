import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import {useGlobalState} from "../config/store";
import "react-calendar/dist/Calendar.css";
import "./YourAvailability.css";

// Sets availability on the calendar by letting the user click on a day. 
// This then pushes or pops a date into an array and colour 
const YourAvailability = () => {

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [updateAvailability, setUpdateAvailability] = useState(false);
  const {store, dispatch} = useGlobalState();
  // console.log(store)
  const {memberData} = store
  if (!memberData) {
    return null
  }
  const {availability} = memberData
  const onDateChange = date => {
    console.log("onDateChange", date);
    setSelectedDate(date);
    console.log(checkDateAvailable(date));
    if (!checkDateAvailable(date)) {
      dispatch ({
        type: "setAvailability",
        data: [...availability, date.toLocaleDateString("en-US")]
      })

    } else {
      const updatedAvailability = availability.filter((availString)=> {
        const availDate = new Date(availString)
        return (availDate.getDate() !== date.getDate()
      || availDate.getMonth() !== date.getMonth()
      || availDate.getFullYear() !== date.getFullYear())
      });
      dispatch ({
        type: "setAvailability",
        data: updatedAvailability
      });
    }

    setUpdateAvailability(!updateAvailability);

    // need to push clicked dates to availability to change colours on calendar
    // let datespush = [];
    // datespush.push(date.toLocaleDateString());
    // console.log(datespush)


  };

  const getTileContent = (date, view) => {
    
    if(checkDateAvailable(date.date)) {
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
    console.log(date.toLocaleDateString("en-US"));
    console.log(availability)
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
    <div className='YourAvail' updateAvailability={updateAvailability} >
      <div className='container'>
        <h2 className='heading'>Your availability</h2>
        <p className='sub-heading'>
          Click on a day to change your availability for the month, then click 'Update' to save{" "}
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
        <button className="UpdateButton">Update</button>
      </div>
    </div>
  );
};

export default YourAvailability;
