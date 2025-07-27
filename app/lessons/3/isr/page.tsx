import React from 'react'

export const revalidate = 5;

const Page = () => {
  const time = new Date().toLocaleTimeString();
  return (
    <div className='p-4'>
      <h1>ISR</h1>
      <p>Refreshes every 5 seconds.</p>
      <p>{time}</p>
    </div>
  )
}

export default Page
