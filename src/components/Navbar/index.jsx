import React from 'react'

function Navbar() {
  return (
    <div className='h-20 flex items-center justify-between w-full px-10  shadow-xl'>
    {/* Logo Section */}
    <div className='text-4xl font-bold text-gray-300 cursor-pointer hover:scale-105 transition-transform'>
      Joboard
    </div>

    {/* Navigation Links */}
    <div className='flex gap-8'>
  <a href='#' className='text-lg font-light text-gray-300 hover:text-cyan-200 transition-colors'>
    Home
  </a>
  <a href='#' className='text-lg font-light text-gray-300 hover:text-cyan-200 transition-colors'>
    Jobs
  </a>
  <a href='#' className='text-lg font-light text-gray-300 hover:text-cyan-200 transition-colors'>
    About
  </a>
  <a href='#' className='text-lg font-light text-gray-300 hover:text-cyan-200 transition-colors'>
    Contact
  </a>
</div>

    {/* Sign In Button */}
    <div>
      <button className='text-md font-medium border-dotted text-white bg-blue-700 px-6 py-2 rounded-3xl hover:bg-blue-800 transition-colors'>
        Sign In
      </button>
    </div>
  </div>
  )
}

export default Navbar;