import React from 'react'

function Navbar() {
  return (
    <div className='h-20 flex items-center justify-between w-full px-10  shadow-xl'>
    {/* Logo Section */}
    <div className='text-4xl font-mono text-gray-300 cursor-pointer hover:scale-105 transition-transform'>
      Joboard
    </div>

    {/* Navigation Links */}
    <div className='flex gap-8'>
      <a href='#' className='text-lg text-gray-300 hover:text-blue-400 transition-colors'>
        Home
      </a>
      <a href='#' className='text-lg text-gray-300 hover:text-blue-400 transition-colors'>
        Jobs
      </a>
      <a href='#' className='text-lg text-gray-300 hover:text-blue-400 transition-colors'>
        About
      </a>
      <a href='#' className='text-lg text-gray-300 hover:text-blue-400 transition-colors'>
        Contact
      </a>
    </div>

    {/* Sign In Button */}
    <div>
      <button className='text-md font-medium text-white bg-blue-500 px-6 py-2 rounded-3xl hover:bg-blue-600 transition-colors'>
        Sign In
      </button>
    </div>
  </div>
  )
}

export default Navbar;