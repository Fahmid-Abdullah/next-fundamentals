import React from 'react'
import TimeComponent from './timeComponent'

const Page = () => {
  return (
    <div className='p-4'>
      <h1>CSR</h1>
      <p>Used for interactive elements. Refreshes on every request.</p>
      <TimeComponent />
    </div>
  )
}

export default Page
