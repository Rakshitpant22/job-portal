import React, { useState } from 'react'
import dayjs from 'dayjs'

function JobCard(props) {
    // const skills = ["Javascript", "React", "Nodejs"];
    const date1 = dayjs(Date.now());
    const diffInDays = date1.diff(props.postedOn,'day');
  return (
    <div className='mx-40 mb-4'>
    <div className='flex justify-between items-center px-6 py-5 bg-gray-300 text-gray-500 rounded-lg border border-gray-300 shadow-lg hover:shadow-xl hover:border-blue-400 hover:-translate-y-1 transition-all duration-300'>
      {/* Job Info Section */}
      <div className='flex flex-col items-start gap-3'>
        {/* Title and Company */}
        <h1 className='text-2xl font-normal text-cyan-800'>
          {props.title} - <span className='text-blue-800 font-extralight'>{props.company}</span>
        </h1>
        
        {/* Job Type, Experience, Location */}
        <p className='text-sm text-gray-600'>
          {props.type} &#x2022; {props.experience} &#x2022; {props.location}
        </p>

        {/* Skills */}
        <div className='flex items-center flex-wrap gap-2'>
          {props.skills.map((skill, i) => (
            <span 
              key={i} 
              className='bg-blue-100 text-blue-700 text-xs font-medium py-1 px-2 rounded-full border border-blue-200'>
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Posting Info and Apply Button */}
      <div className='flex items-center gap-6'>
        {/* Time Since Posted */}
        <p className='text-gray-500 text-sm'>
          Posted {diffInDays > 1 ? `${diffInDays} days` : `${diffInDays} day`} ago
        </p>

        {/* Apply Button */}
        <a href={props.job_link} target="_blank" rel="noopener noreferrer">
          <button className='bg-teal-800 text-white font-semibold px-6 py-2 rounded-full shadow-md hover:bg-teal-600 transition-all'>
            Apply
          </button>
        </a>
      </div>
    </div>
  </div>
  )
}

export default JobCard