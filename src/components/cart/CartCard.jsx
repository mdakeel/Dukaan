import React from 'react'
import C1 from '../../assets/c1.png'
import {BiMinus, BiPlus} from 'react-icons/bi'
import { motion } from 'framer-motion'
import { BiTrash } from 'react-icons/bi'

const CartCard = () => {
  return (
    <div className='w-full h-full flex flex-col'>

    {/* cart item section */}
    <div className='w-full h-[390px] md:h-42 px-4 py-8 flex flex-col gap-3 overflow-y-scroll scrollbar-none'>
    <div className='w-full  px-4 rounded-lg bg-cartItem flex items-center shadow-md  gap-6 '>
        <img src={C1} alt="c1 img" className='w-20 h-20 max-w-[60px] rounde-full object-contain' />
        <div className='flex flex-col '>
            <p className='text-base text-sm text-gray-50'>Chocolate vanilla</p>
            <p className='text-[13px] block text-gray-300 font-semibold'><span className='text-red-600'>$ </span>8.5</p>
        </div>

        <div className='group flex items-center gap-2 ml-auto cursor-pointer'>
            <motion.button whileTap={{scale: 0.75}}>
                <BiMinus className="text-gray-50" />
            </motion.button>
            <p className='w-5 h-5 p-[13px] rounded-sm bg-cartBg text-gray-50 flex items-center justify-center'>1</p>
            <motion.button whileTap={{scale: 0.75}}>
                <BiPlus className="text-gray-50" />
            </motion.button>
        </div>

        <motion.div whileTap={{scale: 0.76}}>
            <BiTrash size={19} className=' cursor-pointer text-red-500'/>
        </motion.div>
    </div>
    </div>

    {/* cart total section */}
    <div className='w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2'>
        <div className='w-full flex  items-center justify-between'>
            <p className='text-gray-400 text-lg'>Sub Total</p>
            <p className='text-lg block text-gray-400 font-semibold'><span className='text-red-600'>$ </span>8.5</p>
        </div>
        <div className='w-full flex  items-center justify-between'>
            <p className='text-gray-400 text-lg'>Delivery</p>
            <p className='text-lg block text-gray-400 font-semibold'><span className='text-red-600'>$ </span>2.5</p>
        </div>

        <div className='w-full border-b border-gray-600 my-2'></div>

        <div className='w-full flex items-center justify-between'>
        <p className='text-gray-400 text-xl font-semibold'>Total</p>
        <p className='text-gray-400 text-xl font-semibold'><span className='text-red-600'>$ </span>11.5</p>
        </div>

        <motion.button
        whileTap={{scale: 0.85}}
        type='button'
        className='w-full p-2 rounded-lg bg-orange-400 text-gray-50 text-lg my-2 hover:shadow-lg hover:bg-orange-600'
        >
            Check Out
        </motion.button>
    </div>

    </div>
  )
}

export default CartCard