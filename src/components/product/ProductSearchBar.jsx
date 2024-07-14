import React from 'react';

const ProductSearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className='md:w-[50%] w-full md:mt-0 mt-10 px-2 md:px-0'>
      <div className='w-full relative'>
        <input 
          type="search" 
          placeholder='Search for products, brands and more'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className='w-full outline-none py-[10px] px-4 pe-[100px] drop-shadow-lg rounded-full'
        />
        <button className='absolute top-[5px] right-2 text-white text-sm font-medium bg-red-500 rounded-full px-6 py-[7px]'>
          Search
        </button>
      </div>
    </div>
  );
};

export default ProductSearchBar;
