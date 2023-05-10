import React from 'react'
import userimage from "../../assets/images/user2.jpg"
import Avatar from '@mui/material/Avatar';
import formatDate from '../../utils/formateddatetime';

export default function IncomingMessage({message}) {
  return (
    <div className='incomeparent'>
        <div className='inmess'>
        <Avatar alt="Remy Sharp">
          {
            message?.name!==null?message.name[0].toUpperCase():"F"
          }
          </Avatar>
            <div className='msgboxic'>
            <p>{message?.text}</p>
            <div className='time'><span>{formatDate(message?.time)}</span></div>
            </div>
        </div>
    </div>
  )
}
