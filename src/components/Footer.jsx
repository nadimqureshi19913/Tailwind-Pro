import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col gap-3  md:flex-row md:justify-between md:items-center'>
      <ul className='flex gap-6 font-lato text-gray-500'>
        <li>
          <a className='hover:text-blue-500' href="#">
            Facebook
          </a>
        </li>
        <li>
          <a className='hover:text-red-500' href="#">
            Instagram
          </a>
        </li>
        <li>
          <a className='hover:text-black' href="#">
            Twitter
          </a>
        </li>
      </ul>
      <div className='flex gap-2  '>
        <img src="./assets/Help-Avatar.svg" alt="help" />
        <div>
          <p className='font-lato font-thin'>Have Any Questions?</p>
          <a className='font-lato font-medium' href="#">Talk to a Specialist</a>
        </div>
      </div>
    </div>
  )
}

export default Footer