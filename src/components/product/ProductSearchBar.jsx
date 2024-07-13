import React from 'react'

const ProductSearchBar = () => {
  return (
    <div className='w-[50%] '>
        <div className='w-full  relative'>
          <input 
          type="search" 
          name="" 
          id=""
          placeholder='Search for products, brands and more'
          className='w-full outline-none py-[10px] px-4 pe-[100px] drop-shadow-lg rounded-full '
           />
           <button className='absolute top-[5px] right-2 text-white text-sm font-medium bg-red-500 rounded-full px-6 py-[7px]'>Search</button>
        </div>
    </div>
  )
}

export default ProductSearchBar