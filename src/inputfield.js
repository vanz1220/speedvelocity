import React, { Component, useState } from 'react';
import { render } from 'react-dom';

export default function InputField({name,label}) {
  const [state, setState] = useState('')
  return (
    <div>
     <label>{label}</label>
      <input type="datetime-local" 
      value={state} 
      name={name}
      onChange={(e) => setState(e.target.value)} step="2"/>
    </div>
  );

}