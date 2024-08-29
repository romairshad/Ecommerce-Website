import React from 'react'

const NewsletterBox = () => {

  const onSubmitHandler  = (event) => {
    event.preventDefault();
  }

  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800 '>Subsribe now and get 20% off your first purchase!</p>
      <p className='text-gray-400 mt-3'> Enter your email address below to get started</p>
      <form className='w-full sm:w-1/2 flex item-center gap-3 mx-auto my-6 border pl-3 '>
        <input type="email" placeholder="Enter your email address" className="w-full sm:flex-1 outline-none" required />
        <button type="submit" className='bg-black text-white text-xs px-10 py-4 active:bg-gray-700'> Subscribe</button>

      </form>
    </div>
  )
}

export default NewsletterBox
