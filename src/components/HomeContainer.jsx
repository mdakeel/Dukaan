import React from 'react'
import delivery from '../assets/delivery.png'

const HomeContainer = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full ' id="home" >
    <div className='py-2 md:w-[80%] w-full flex-1 flex flex-col items-start  justify-center gap-6'>
        <div className='flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full  '>
          <p className='text-base text-orange-500 font-semibold'>Bike Delivery</p>
          <div className='w-8 h-8 rounded-full bg-white overflow-hidden drop-shadow-xl'>
            <img src={delivery} className="w-full h-full object-contain" alt="bike delivery" />
          </div>
        </div>
        
        <p className='text-[2.5rem] lg:text-[3rem] font-bold text-headingColor  tracking-wide '>The Fastest Delivery in
          <span className='text-orange-600 text-[3rem] lg:text-[4rem]'>Your City</span>
        </p>

        <p className='text-base text-textColor text-center md:text-left md:w-[80%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Minima, perferendis minus impedit atque nisi veritatis explicabo, 
           possimus accusamus deserunt deleniti vero temporibus velit veniam,
            ex quae omnis dolorum odio error.</p>

            <button type='button' className='md:w-auto bg-gradient-to-br from-orange-400 to-orange-500 w-full px-4 py-2 rounded-lg hover:shadow-lg  transition-all ease-in-out duration-100'>Order Now</button>
    </div>

    <div className='p-4 bg-blue-400 flex-1'></div>
  </section>
  )
}

export default HomeContainer