import './App.css';
import InputField from './inputfield'
import InputTextField from './inputtextfield';
import React, { Component, useRef } from 'react'

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
    const distanceMeter = form['dist1'].value

    const time1TotalHourMin = parseFloat(time1Hours * 60)
    const time2TotalHourMin = parseFloat(time2Hours * 60)
    const timetotalHour = time2TotalHourMin - time1TotalHourMin
    const timetotalMin = time2Minutes - time1Minutes
    const timetotalSec = (time2Seconds - time1Seconds) / 60

    const totalTime = timetotalHour + timetotalMin + timetotalSec
    const velocity = parseFloat(distanceMeter / totalTime).toFixed(4)
     alert(`${velocity}`)

  };

  return (
    <div className='App'>
      <h1>Speed Velocity</h1><br/>
      <form ref={nameForm}>
        <InputTextField label={'Distance In Meters: '} name={'dist1'}/><br/>
        <InputField label={'Release Time: '} name={'time1'}/><br/>
        <InputField label={'Arrival Time: '} name={'time2'}/><br/>
      </form>
      <button onClick={timer1}>Compute Time</button>
      
    </div>
  );
}

export default App;
