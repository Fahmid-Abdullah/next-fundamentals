import React from 'react'

export const dynamic = "force-static";

const Page = () => {
  const time = new Date().toLocaleTimeString();
  return (
    <div className='p-4'>
      <h1>SSG</h1>
      <p>Refreshes on rebuild only. Run npm run build again.</p>
      <p>{time}</p>
    </div>
  )
}

export default Page
