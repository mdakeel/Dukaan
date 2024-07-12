import React from 'react';
import { motion } from 'framer-motion';
import { MdShoppingBasket } from 'react-icons/md';
import { carousel } from '../../utils/data';

const RowContainer = ({value}) => {
    const containerWidth = carousel.length * 260;
 
  return (
    <div className='w-full  overflow-x-scroll  scrollbar-none mt-6 '>
         <div
        className='flex w-full gap-6 px-2  py-4'
        style={{
          transform: `translateX(-${value.currentIndex * 285}px)`,
          width: `${containerWidth}px`,
          transition: 'transform 0.5s ease-in-out',
        }}
      >
      {carousel.map((item) => (
        <div key={item.id}  className=' bg-gray-50 rounded-xl drop-shadow-lg hover:bg-orange-50 rounded-lg transition-transform duration-500'>
          <div className='w-[260px] h-[180px]  transition-all duration-100  flex flex-col items-center  justify-evenly relative'>
            <div className='w-full flex items-center justify-between px-4'>
              <motion.img
                whileHover={{ scale: 1.2 }}
                src={item.imageSrc}
                alt={item.name}
                className='w-[130px] -mt-10 drop-shadow-2xl'
              />
              <motion.div
                whileTap={{ scale: 0.75 }}
                className='w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md'
              >
                <MdShoppingBasket className='text-white' />
              </motion.div>
            </div>
            <div className='w-full flex flex-row items-end justify-between px-4'>
            <div className='flex items-center '>
                <p className='text-3xl text-headingColor font-semibold'>
                  <span className=' text-red-500'>$</span>{item.price}
                </p>
              </div>
                <div className='flex flex-col items-end justify-end'><p className='text-textColor font-semibold text-base text-sm'>{item.name}</p>
                <p className=' text-sm text-gray-500'>{item.decription} </p></div>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default RowContainer;
