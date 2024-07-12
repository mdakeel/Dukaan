
import React, { useState } from "react";
import { IoFastFood } from "react-icons/io5";
import { categories } from "../../utils/data";
import { motion } from "framer-motion";

const MenuContainer = () => {
  const [filter, setFilter] = useState("chicken");


  return (
    <section className="w-full mt-6" id="menu">
      <div className="w-full flex flex-col items-center justify-center">
      <div className='flex flex-col gap-2 items-end '>
          <p className='text-3xl font-bold capitalize text-headingColor '>
            Our Hot Dishes
          </p>
          <span className='border border-orange-600 w-[90px] '></span>
          </div>

        <div className="w-full flex items-center justify-start lg:justify-center gap-8 py-10 overflow-x-scroll scrollbar-none">
          {categories &&
            categories.map((category) => (
              <motion.div
                whileTap={{ scale: 0.88 }}
                key={category.id}
                className={`group ${
                  filter === category.urlParamName ? "bg-cartNumBg" : "bg-card"
                } w-24 min-w-[94px] h-24 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-2 items-center justify-center hover:bg-cartNumBg `}
                onClick={() => setFilter(category.urlParamName)}
              >
                <div
                  className={`w-10 h-10 rounded-full shadow-lg ${
                    filter === category.urlParamName
                      ? "bg-white"
                      : "bg-cartNumBg"
                  } group-hover:bg-white flex items-center justify-center`}
                >
                  <IoFastFood
                    className={`${
                      filter === category.urlParamName
                        ? "text-textColor"
                        : "text-white"
                    } group-hover:text-textColor text-lg`}
                  />
                </div>
                <p
                  className={`text-sm font-medium ${
                    filter === category.urlParamName
                      ? "text-white"
                      : "text-textColor"
                  } group-hover:text-white`}
                >
                  {category.name}
                </p>
              </motion.div>
            ))}
        </div>

        <div className="w-full">
          
        </div>
      </div>
    </section>
  );
};

export default MenuContainer;