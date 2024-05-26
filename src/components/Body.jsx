import React from 'react'

const Body = () => {
  return (
    <div className='lg:flex justify-center items-center gap-6'>
        <div className='flex items-center justify-center lg:w-[30%]'>
            <img className='-rotate-[45deg] h-64 md:h-96' src="./assets/Blue-Shape.svg" alt="1st" />
            <img className='absolute -rotate-[30deg] h-64 md:h-96' src="./assets/Pink-Shape.svg" alt="2st" />
            <img className='absolute -rotate-[15deg] h-64 md:h-96' src="./assets/Purple-Shape.svg" alt="3st" />
            <img className='absolute w-[250px] h-60 md:h-96 md:w-[350px]' src="./assets/Hero-Model.png" alt="hero" />
        </div>
        <div className='lg:w-[40%] text-start'>
          <h1 className='text-5xl mt-4 md:m-auto md:w-[90%] md:text-center md:mt-4  font-bold font-lato leading-tight '>Host Your Website In Less Than 5 Minut</h1>
          <p className='font-lato text-gray-500 md:m-auto md:w-[90%] md:text-center md:mt-4 '>With Hoster , Get your Werbsit up and running in no less than 5 minuts with the most competetive price packages available online.</p>
          <form action="" className='flex  flex-col gap-4 md:flex-row lg:text-start lg:flex-col'>
            <input className="rounded-md px-4 py-3 md:m-auto md:w-[80%] md:mt-4 placeholder:'text-gray-400'  " type="email" placeholder='Enter Email Address..' />
            <button className='rounded-md px-4 py-3 md:m-auto md:mb-4 md:w-[80%] md:mt-4  bg-blue-400 hover:bg-blue-600 text-white mb-4 '>Join Waitlist</button>
          </form>
          <div className='flex gap-2  md:m-auto md:flex md:items-center md:mb-4 md:w-[70%] md:mt-4 lg:w-[80%] lg:text-center  lg:flex-col gap-2'>
            <img className='md:w-10 ' src="./assets/Checkmark.svg" alt="check" />
            <p className='font-lato md:text-2xl'>No Spam, Ever . UnSubscribe Anytime</p>
          </div>
        </div >
    </div>
  )
}

export default Body