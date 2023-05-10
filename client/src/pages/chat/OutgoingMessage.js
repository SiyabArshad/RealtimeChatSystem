import React from 'react'
import formatDate from '../../utils/formateddatetime';

export default function OutgoingMessage({message}) {
  return (
    <div className='outgoing'>
        <div className='msgboxog'>
        <p>{message?.text}</p>
        <div className='time'><span style={{color:"white"}}>{formatDate(message?.time)}</span></div>
        </div>
    </div>
  )
}
