import React, { useState } from 'react';
import TimePicker from 'react-time-picker';

export default function SpeedVelocity() {
    const [time1, onChangetime1] = useState('00:00:00');
    const [time2, onChangetime2] = useState('00:00:00');


    return (
      <div>
        <TimePicker format='hh:mm:ss a' onChange={onChangetime1} value={time1} />
        <TimePicker format='hh:mm:ss a' onChange={onChangetime2} value={time2} />
      </div>
    );
}
