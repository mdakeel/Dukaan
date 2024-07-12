import React, { useState } from 'react'

import { MdShoppingBasket, MdAdd, MdLogout, MdOutlineInfo } from 'react-icons/md'
import { CgProfile } from "react-icons/cg";
import { RxDashboard } from "react-icons/rx";

import profile from '../../assets/avatar.png'
import { motion }from 'framer-motion'
import { Link } from 'react-router-dom'

const DextopNavbar = () => {
    const [isMenu, setIsMenu] = useState(false)

    const login = () => {
        setIsMenu(!isMenu)
    }

  return (
    <div className='flex items-center gap-8'>
    <ul className='flex items-center gap-8 '>
        <li className='text-base text-textColor font-medium hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'> Home</li>
        <li className='text-base text-textColor font-medium hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'> Menu</li>
        <li className='text-base text-textColor font-medium hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'> About Us</li>
    </ul>

    <div className='relative flex items-center justify-center '>
        <MdShoppingBasket className='text-textColor  text-2xl  cursor-pointer'/>
        <div className='absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
            <p className='text-xs text-white font-semibold'>2</p>
        </div>
    </div>

    <div className='relative'>
    <motion.img 
    whileTap={{scale: .8}}
    onClick={login}
    src={profile} className='w-10 min-w-[35px] h-10 min-h-[35px] drop-shadow-md cursor-pointer' alt="userProfile" 
    // onClick={login}
    />
        {
            isMenu && (
                <motion.div
                initial={{ opacity: 0, scale: 0.6}}
                animate={{ opacity: 1, scale: 1}}
                exit={{ opacity: 0, scale: 0.6}}
                 className='w-40 bg-gray-50  shadow-xl rounded-lg flex flex-col absolute top-11 right-0'
                 >
                    <Link to={"/createItem"} >
                <p onClick={() => setIsMenu(false)} className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 hover:text-headingColor transition-all duration-100 ease-in-out text-textColor text-base'> <MdAdd /> Add Item
                </p>
                </Link>

                <Link to={"/profile"} >
                <p onClick={() => setIsMenu(false)} className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 hover:text-headingColor transition-all duration-100 ease-in-out text-textColor text-base'> <CgProfile /> Profile
                </p>
                </Link>

                <Link to={"/dashboard"} >
                <p onClick={() => setIsMenu(false)} className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 hover:text-headingColor transition-all duration-100 ease-in-out text-textColor text-base'> <RxDashboard /> Dashboard
                </p>
                </Link>

                <Link to={"/login"} >
                <p onClick={() => setIsMenu(false)} className='m-2 px-2 py-[6px]  flex items-center  bg-gray-200 hover:bg-gray-300 gap-3 cursor-pointer hover:text-headingColor transition-all duration-100 ease-in-out text-textColor text-base rounded-md shadow-md'><MdLogout /> Logout </p>
                </Link>
            </motion.div>
            )
        }
    </div>
   </div>
  )
}

export default DextopNavbar