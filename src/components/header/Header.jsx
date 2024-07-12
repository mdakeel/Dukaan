import React from 'react'
import logo from '../../assets/logo.png'

import { Link } from 'react-router-dom'
import DextopNavbar from './DextopNavbar';
import MobileNavbar from './MobileNavbar';
import SearchBar from './SearchBar';

const Header = () => {

  return (
    <header className='fixed  z-50 w-screen md:p-6 md:px-16 p-4 px-6'>
        {/* desktop & tablet */}
        <div className='hidden md:flex w-full h-full items-center justify-between'>
            <Link to={'/'} className='flex items-center gap-2 cursor-pointer'>
                <img src={logo} className='w-8 object-cover' alt="logo" />
                <p className='text-headingColor text-2xl font-bold'>DukaaN</p>
            </Link>

            {/* <SearchBar /> */}

          {/* Dextop NavBar */}
           <DextopNavbar />
        </div>


        {/* mobile NavBar*/}

        <MobileNavbar />
       
    </header>
  )
}

export default Header