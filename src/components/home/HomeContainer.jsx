import React from 'react'
import delivery from '../../assets/delivery.png'
import heroBg from '../../assets/heroBg.png'
import { heroData } from '../../utils/data'
import { motion } from 'framer-motion'


const HomeContainer = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full ' id="home" >
      {/* left container */}
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

            <button type='button' className='md:w-auto bg-orange-400 w-full px-4 py-2 rounded-md hover:bg-transparent hover:text-orange-400 font-medium border shadow-md border-orange-400 transition-all ease-in-out duration-100'>Order Now</button>
    </div>

    {/* right container */}
    <div className='py-2 flex-1 flex   items-center relative'>
      <img src={heroBg} className='ml-auto h-420 w-full lg:w-auto lg:h-650' alt="cardBg" />

      <div className='w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-20 py-10 gap-10 flex-wrap '>
        { heroData && heroData.map((n) => (
          <motion.div whileHover={{ scale: 1.06 }} key={n.id} className='lg:w-190  p-4 transition-all duration-300 bg-cardOverlay backdrop-blur-md rounded-xl drop-shadow-lg flex flex-col items-center  hover:rounded-md cursor-pointer justify-center'>
          <img src={n.imageSrc} className='lg:w-40 w-20 -mt-8 lg:-mt-20 ' alt="I1" />
          <p className='text-base lg:text-xl font-semibold text-textColor'>{n.name}</p>
          <p className='text-[12px] lg:text-sm text-lighttextGray font-medium my-1 lg:my-3'>{n.decription}</p>
          <p className='text-sm font-semibold text-headingColor'><span className='text-xs text-red-600'>$</span>{n.price}</p>
        </motion.div>
        ))}

      </div>
    </div>
  </section>
  )
}

export default HomeContainer