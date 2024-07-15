import React from 'react'
import { MdOutlineKeyboardBackspace } from 'react-icons/md'
import { RiRefreshFill } from 'react-icons/ri'
import { motion } from 'framer-motion'
import { CartBody } from './CartBody'


const CartContainer = () => {
  return (
    <motion.div
        initial={{opacity:0, x: 200}}
        animate={{opacity:1, x: 200}}
        exit={{opacity:0, x: 200}}
        
     className='fixed top-0 right-0 md:w-[430px] w-full h-screen bg-white drop-shadow-md flex flex-col z-[101]'>
        <div className='w-full flex items-center justify-between p-4 cursor-pointer'>
            <motion.div whileTap={{scale: 0.75}}
            className='bg-gray-100 rounded-md px-2 hover:shadow-md'>
                <MdOutlineKeyboardBackspace className='text-textColor text-3xl'/>
            </motion.div>
            <p className='text-textColor text-lg font-semibold'>Cart</p>

            <motion.p
            whileTap={{scale: 0.75}}
            className='flex items-center gap-2 p-1 px-2 my-1 bg-gray-100 rounded-md  hover:shadow-md cursor-pointer text-orange-600 text-base '
            >
            clear <RiRefreshFill />{" "}
           </motion.p>
        </div>

        {/* cart body */}
        <CartBody />
        
    </motion.div>
  )
}

export default CartContainer