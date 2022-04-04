import './App.css';
import InputField from './inputfield'
import InputTextField from './inputtextfield';
import React, { Component, useRef } from 'react'
import { isTime } from 'react-time-picker/dist/shared/propTypes';

function App() {
  const nameForm = useRef(null)

  const timer1 = ()=>{
    // show the user input value to console
    const form = nameForm.current
    const time1Hours = new Date(form['time1'].value).getHours()
    const time1Minutes = new Date(form['time1'].value).getMinutes()
    const time1Seconds = new Date(form['time1'].value).getSeconds()
    const time2Hours = new Date(form['time2'].value).getHours()
    const time2Minutes = new Date(form['time2'].value).getMinutes()
    const time2Seconds = new Date(form['time2'].value).getSeconds()

    const time1HourTotal = (parseFloat(time1Hours * 60) + time1Minutes + parseFloat(time1Seconds / 60))
    const time2HourTotal = (parseFloat(time2Hours * 60) + time2Minutes + parseFloat(time2Seconds / 60))

     alert(`${time1HourTotal}`)
  };

  return (
    <div className='App'>
      <h1>Speed Velocity</h1><br/>
      <form ref={nameForm}>
        <InputTextField label={'Distance In Meters: '} name={'dist1'}/>
        <InputField label={'Release Time: '} name={'time1'}/>
        <InputField label={'Arrival Time: '} name={'time2'}/>
      </form>
      <button onClick={timer1}>Compute Time</button>
    </div>
  );
}

export default App;
