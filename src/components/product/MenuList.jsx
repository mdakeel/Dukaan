import React from 'react'
import { categories } from '../../utils/data'
import { motion } from 'framer-motion'

const MenuList = ({ onCategoryClick, selectedCategory }) => {
  return (
    <div className="w-full flex items-center gap-4  py-8 overflow-x-scroll scrollbar-none">
          {categories &&
            categories.map((category) => (
              <motion.div
                whileTap={{ scale: 0.88 }}
                key={category.id}
                className={`group ${
                  selectedCategory === category.name ? "bg-cartNumBg" : "bg-card"
                }   cursor-pointer rounded-md drop-shadow-xl flex flex-col gap-2 items-center justify-center hover:bg-cartNumBg `}
                onClick={() => onCategoryClick(category.name)}
              >
               
                <p
                  className={`text-sm font-medium px-[15px] py-[9px] ${
                    selectedCategory === category.name
                      ? "text-white"
                      : "text-textColor"
                  } group-hover:text-white`}
                >
                  {category.name}
                </p>
              </motion.div>
            ))}
        </div>
  )
}

export default MenuList