import React from 'react'

function Header() {
  return (
    <div className='mt-10 flex flex-col gap-6 items-center justify-center text-center text-gray-300'>
  <h1 className='text-6xl font-extralight tracking-wide leading-tight'>
    Your ideal job awaits,
    <span className='text-blue-900'> start the search</span>
  </h1>
  <p className='text-4xl md:text-3xl text-gray-200 font-extralight tracking-wide'>
    Get the latest job openings that best suit you!
  </p>
</div>
  )
}

export default Header