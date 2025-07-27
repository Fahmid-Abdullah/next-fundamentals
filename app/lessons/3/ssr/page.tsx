import React from 'react'

export const dynamic = "force-dynamic";

const Page = () => {
  const time = new Date().toLocaleTimeString();
  return (
    <div className='p-4'>
      <h1>SSR</h1>
      <p>Refreshes on every request.</p>
      <p>{time}</p>
    </div>
  )
}

export default Page
