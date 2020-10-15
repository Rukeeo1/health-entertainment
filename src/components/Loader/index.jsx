import React from 'react'
import './style.scss';

export default function Loader({ fullpage }) {
  return (
   <div className={`${fullpage ? 'full-page' : ''}`} >
      <div className="loader"></div>
   </div>
  )
}