import './App.css';
import React, { useRef, useState } from 'react'

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
     alert(`Your Speed is ${velocity} mpm`)

  };

  const [statet1, setStatet1] = useState('')
  const [statet2, setStatet2] = useState('')
  const [stated1, setStated1] = useState('')

  return (
    <div className='App'>
      <h1>Speed Velocity</h1><br/>
      <form ref={nameForm}>

      <label>{'Release Time: '}</label>
      <input type="datetime-local" value={statet1} name={'time1'} onChange={(e) => setStatet1(e.target.value)} step="2"/><br/>
      <label>{'Arrival Time: '}</label>
      <input type="datetime-local" value={statet2} name={'time2'} onChange={(e) => setStatet2(e.target.value)} step="2"/><br/>

      <label>{'Distance In Meters: '}</label>
      <input type="number" value={stated1} name={'dist1'} onChange={(e) => setStated1(e.target.value)} float={true}/><br/>

      </form>
      <br/>
      <button onClick={timer1}>Compute Time</button>
      
    </div>
  );
}

export default App;
