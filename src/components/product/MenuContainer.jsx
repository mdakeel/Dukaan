import React from "react";
import MenuList from "./MenuList";
import ProductSearchBar from "./ProductSearchBar";

const MenuContainer = ({ handleCategoryClick, selectedCategory }) => {
  return (
    <section className="w-full mt-10" id="menu">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="flex flex-col gap-2 items-end ">
          <p className="text-3xl font-bold capitalize text-headingColor ">
            Our Hot Dishes
          </p>
          <span className="border-2 rounded-full border-orange-600 w-[90px] "></span>
        </div>


        <div className="w-full flex flex-row items-center justify-between">
        {/* menu list */}
        <MenuList onCategoryClick={handleCategoryClick} selectedCategory={selectedCategory} />

        {/* productsearchBar */}
        <ProductSearchBar />
        </div>

        <div className="w-full"></div>
      </div>
    </section>
  );
};

export default MenuContainer;
