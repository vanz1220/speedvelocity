import './App.css';
import InputField from './inputfield'
import React, { Component, useRef } from 'react'

function App() {
  const nameForm = useRef(null)

  const timer1 = ()=>{
    // show the user input value to console
    const form = nameForm.current
    const timediff = form['time2'] - form['time1'].value
     alert(`${timediff}`)
  };

  return (
    <div className='App'>
      <h1>Speed Velocity</h1>
      <form ref={nameForm}>
       <InputField label={'Release Time: '} name={'time1'}/>
       <InputField label={'Arrival Time: '} name={'time2'}/>
      </form>
      <button onClick={timer1}>Compute Time</button>
    </div>
  );
}

export default App;
