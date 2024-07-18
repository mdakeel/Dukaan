// import React, { useState } from 'react';
// import { products } from '../../utils/api/productApi';
// import MenuContainer from './MenuContainer';
// import ProductCard from './ProductCard';
// import Filter from './Filter/Filter';
// import Pagination from './Pagination';

// const Category = () => {
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [searchQuery, setSearchQuery] = useState('');

//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category);
//   };

//   const filteredProducts = products.filter((product) => 
//     (selectedCategory === "All" || product.category === selectedCategory) &&
//     product.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="w-full">
//       <MenuContainer 
//         onCategoryClick={handleCategoryClick} 
//         selectedCategory={selectedCategory}
//         searchQuery={searchQuery}
//         setSearchQuery={setSearchQuery}
//       />
      
//       <div className='flex md:flex-row   flex-col w-full gap-4'>

//         <div className='md:w-1/5 w-full'>
//             <Filter onCategoryClick={handleCategoryClick} selectedCategory={selectedCategory} />
//         </div>

//       <div className='md:w-4/5 w-full flex flex-col items-end justify-end gap-6'>
//       <div className="w-full flex flex-wrap md:items-start md:justify-start items-center justify-center w-full gap-3">
//         {filteredProducts.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//       <Pagination />
//       </div>

//       </div>
//       </div>
  
//   );
// };

// export default Category;


import React, { useState } from 'react';
import { products } from '../../utils/api/productApi';
import MenuContainer from './MenuContainer';
import ProductCard from './ProductCard';
import Filter from './Filter/Filter';
import Pagination from './Pagination';

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to the first page on category change
  };

  const filteredProducts = products.filter((product) => 
    (selectedCategory === "All" || product.category === selectedCategory) &&
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <div className="w-full">
      <MenuContainer 
        onCategoryClick={handleCategoryClick} 
        selectedCategory={selectedCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      
      <div className='flex md:flex-row flex-col w-full gap-4'>
        <div className='md:w-1/5 w-full'>
          <Filter onCategoryClick={handleCategoryClick} selectedCategory={selectedCategory} />
        </div>


       <div className='md:w-4/5 w-full flex flex-col md:items-end md:justify-end  items-center justify-center gap-6'>
        <div className="w-full flex flex-wrap md:items-start md:justify-start items-center justify-center gap-4">
          {currentProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <Pagination 
        totalPages={totalPages} 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
      />
      </div>
      </div>
     
    </div>
  );
};

export default Category;

