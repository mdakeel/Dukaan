import React, { useState } from 'react'
import logo from '../assets/logo.png'

import { MdShoppingBasket, MdAdd, MdLogout, MdOutlineInfo } from 'react-icons/md'
import { CgProfile } from "react-icons/cg";
import { RxDashboard } from "react-icons/rx";
import { RiHome3Line } from "react-icons/ri";
import { CgMenuBoxed } from "react-icons/cg";
import { FaXmark } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";


import profile from '../assets/avatar.png'
import { motion }from 'framer-motion'
import { Link } from 'react-router-dom'

const Header = () => {
    const [isMenu, setIsMenu] = useState(false)

    const login = () => {
        setIsMenu(!isMenu)
    }

  return (
    <header className='fixed  z-50 w-screen md:p-6 md:px-16 p-4 px-6'>
        {/* desktop & tablet */}
        <div className='hidden md:flex w-full h-full items-center justify-between'>
            <Link to={'/'} className='flex items-center gap-2 cursor-pointer'>
                <img src={logo} className='w-8 object-cover' alt="logo" />
                <p className='text-headingColor text-2xl font-bold'>DukaaN</p>
            </Link>

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
        </div>


        {/* mobile */}
        <div className='flex items-center justify-between md:hidden w-full h-full'>
            
        <div className='relative flex items-center justify-center '>
                <MdShoppingBasket className='text-textColor  text-2xl  cursor-pointer'/>
                <div className='absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
                    <p className='text-xs text-white font-semibold'>2</p>
                </div>
            </div>

        <Link to={'/'} className='flex items-center gap-2 cursor-pointer'>
                <img src={logo} className='w-7 object-cover' alt="logo" />
                <p className='text-headingColor text-[25px] font-bold'>DukaaN</p>
        </Link>

        <div className='relative'>
            <motion.div 
            whileTap={{scale: .8}}
            onClick={login}
            src={profile} className='w-10 min-w-[35px] h-10 min-h-[35px] drop-shadow-md cursor-pointer' alt="userProfile" 
            // onClick={login}
            >
                {
                            isMenu ? 
                            (<FaXmark className='w-6 h-6 text-headingColor'/>) 
                            : 
                            (<FaBars className='w-6 h-6 text-headingColor'/>)
                        }
            </motion.div>
                {
                    isMenu && (
                        <motion.div
                        initial={{ opacity: 0, scale: 0.6}}
                        animate={{ opacity: 1, scale: 1}}
                        exit={{ opacity: 0, scale: 0.6}}
                         className='w-40 bg-gray-50  shadow-xl rounded-lg flex flex-col absolute top-11 right-0'
                         >

                        <Link to={"/createItem"} >
                        <p onClick={() => setIsMenu(false)} className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 hover:text-headingColor transition-all duration-100 ease-in-out text-textColor text-base'> <CgProfile /> Profile
                        </p>
                        </Link>

                        <ul className=' items-center w-full '>
                <li  onClick={() => setIsMenu(false)} className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 hover:text-headingColor transition-all duration-100 ease-in-out text-textColor text-base'><RiHome3Line /> Home</li>
                <li  onClick={() => setIsMenu(false)} className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 hover:text-headingColor transition-all duration-100 ease-in-out text-textColor text-base'><CgMenuBoxed /> Menu</li>
                <li  onClick={() => setIsMenu(false)} className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 hover:text-headingColor transition-all duration-100 ease-in-out text-textColor text-base'><MdOutlineInfo /> About Us</li>
            </ul> 

                        <Link to={"/dashboard"} >
                        <p onClick={() => setIsMenu(false)} className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 hover:text-headingColor transition-all duration-100 ease-in-out text-textColor text-base'> <RxDashboard /> Dashboard</p>
                        </Link>
        
                        <Link to={"/login"} >
                        <p onClick={() => setIsMenu(false)} className='m-2 px-2 py-[6px]  flex items-center  bg-gray-200 hover:bg-gray-300 gap-3 cursor-pointer hover:text-headingColor transition-all duration-100 ease-in-out text-textColor text-base rounded-md shadow-md'><MdLogout /> Logout </p>
                        </Link>
                    </motion.div>
                    )
                }
            </div>

        </div>
    </header>
  )
}

export default Header