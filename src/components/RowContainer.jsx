import React from 'react'
import c1 from '../assets/c1.png'
import { motion } from 'framer-motion'
import { MdShoppingBasket } from 'react-icons/md'

const RowContainer = () => {
  return (
    <div className="w-full my-12 flex items-center gap-3 ">
        <div className=' w-275 h-[120px] min-h-[200px] px-4 md:w-300 md:min-w-[300px] bg-cardOverlay hover:drop-shadow-md transition-all duration-100  drop-shadow-md rounded-lg   backdrop-blur-md hover:drop-shadow-lg flex flex-col items-center justify-evenly relative'>
            <div className='w-full flex items-center justify-between'>
                <motion.img 
                whileHover={{scale: 1.2}}
                src={c1} alt="c1" className='w-40 -mt-10 drop-shadow-2xl' />
                <motion.div 
                whileTap={{scale: 0.75}}
                className='w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md '>
                        <MdShoppingBasket className='text-white' />
                </motion.div>
            </div>
            <div className='w-full flex flex-col items-end justify-end '>
                <p className='text-textColor font-semibold text-base md:text-lg'>Chocolate & Vanilla</p>
                <p className='mt-1 text-sm text-gray-500 '>45 Calories</p>
                <div className='flex items-center gap-8 '>
                    <p className='text-lg text-headingColor font-semibold '>
                        <span className='text-sm text-red-500 '>$</span>5.25</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RowContainer