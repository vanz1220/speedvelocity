import React, { Component, useState } from 'react';
import { render } from 'react-dom';

export default function InputTextField({name,label}) {
  const [state, setState] = useState('')
  return (
    <div>
     <label>{label}</label>
      <input type="number" 
      value={state} 
      name={name}
      onChange={(e) => setState(e.target.value)}
      float={true}/>
    </div>
  );

}