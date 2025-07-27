"use client"
import React, { useEffect, useState } from 'react'

const TimeComponent = () => {
    const [time, setTime] = useState<string>();
    const [toggleTime, setToggleTime] = useState<boolean>(false);
    
    useEffect(() => {
        const now = new Date().toLocaleTimeString();
        setTime(now)
    }, [])

  return (
    <div>
      <button className='mt-4 px-4 py-2 w-sm text-md font-bold bg-red-700 hover:bg-red-800 hover:scale-105 rounded-lg cursor-pointer' 
      onClick={() => setToggleTime((prev) => !prev)}>Show Time</button>
      {toggleTime && (
        <p>{time}</p>
      )}
    </div>
  )
}

export default TimeComponent
