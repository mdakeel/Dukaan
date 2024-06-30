import React, { useState } from 'react'
import {motion} from 'framer-motion'
import { MdAttachMoney, MdCloudUpload, MdDelete, MdFastfood, MdFoodBank } from 'react-icons/md'
import {categories} from '../../src/utils/data'
import Loader from './Loader'

const CreateContainer = () => {
  const [item, setItem] = useState({
    title : '',
    calories : '',
    price : '',
    category : 'null',
    imageAsset : 'null',
    fields : false,
    alertStatus : 'danger',
    msg : 'null',
    isLoading : false,
})
  return (
    <div className='w-full  flex items-center justify-center '>
      <div className='w-[90%] md:w-[75%] border border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center gap-4'>
          {
            item.fields && (
              
              <motion.p 
               initial = { {opacity: 0}}
               animate = { {opacity: 1}}
               exit={ { opacity: 0}}
              className={`w-full p-2 rounded-lg text-center text-lg font-semibold ${
                item.alertStatus === 'danger'
                ? "bg-red-400 text-red-800"
                : "bg-emerald-400 text-emerald-800"
              }`}>
                {item.msg}
              </motion.p>
            )
          }
          <div className='w-full py-2 border-b border-gray-300 flex items-center gap-2'>
            <MdFastfood className="text-xl text-gray-700" />
            <input type="text" 
            required
            value={item.title}
            onChange={(e) => setItem({...item, title: e.target.value})}
            placeholder='Give me a title...'
            className='w-full h-full text-lg bg-transparent font-semibold outline-none border-none placeholder:text-gray-400 text-textColor' />
          </div>

          <div className='w-full '>
            <select name="" id=""
            onChange={(e) => setItem({...item, category: e.target.value})}
            className='outline-none  w-full text-base border-b-2 border-gray-200 p-2 rounded-md cursor-pointer'
            >
              <option value="other" className='bg-white'>
                Select Category
              </option>
              {
                categories && categories.map((categoryItem) => (
                  <option
                  key={categoryItem.id}
                  className='text-base border-0 outline-none capitalize bg-white text-headingColor'
                  value={categoryItem.urlParamName}
                  >{categoryItem.name}</option>
                ))
              }
            </select>
          </div>

          <div className="group flex justify-center items-center flex-col border-2 border-dotted border-gray-300 w-full h-225 md:h-340 cursor-pointer rounded-lg">
          {item.isLoading ? (
            <Loader />
          ) : (
            <>
              {item.imageAsset ? (
                <>
                  <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer">
                    <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                      <MdCloudUpload className="text-gray-500 text-3xl hover:text-gray-700" />
                      <p className="text-gray-500 hover:text-gray-700">
                        Click here to upload
                      </p>
                    </div>
                    <input
                      type="file"
                      name="uploadimage"
                      accept="image/*"
                      // onChange={uploadImage}
                      className="w-0 h-0"
                    />
                  </label>
                </>
              ) : (
                <>
                  <div className="relative h-full">
                    <img
                      src={item.imageAsset}
                      alt="uploaded image"
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      className="absolute bottom-3 right-3 p-3 rounded-full bg-red-500 text-xl cursor-pointer outline-none hover:shadow-md  duration-500 transition-all ease-in-out"
                      // onClick={deleteImage}
                    >
                      <MdDelete className="text-white" />
                    </button>
                  </div>
                </>
              )}
            </>
          )}
        </div>

        <div className="w-full flex flex-col md:flex-row items-center gap-3">
          <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
            <MdFoodBank className="text-gray-700 text-2xl" />
            <input
              type="text"
              required
              value={item.calories}
              onChange={(e) => setItem({ ...item, calories: e.target.value } )}
              placeholder="Calories"
              className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
            />
          </div>

          <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
            <MdAttachMoney className="text-gray-700 text-2xl" />
            <input
              type="text"
              required
              value={item.price}
              onChange={(e) => setItem({...item, price: e.target.value} )}
              placeholder="Price"
              className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
            />
          </div>
        </div>

        <div className="flex items-center w-full">
          <button
            type="button"
            className="ml-0 md:ml-auto w-full md:w-auto border-none outline-none bg-emerald-500 px-12 py-2 rounded-lg text-lg text-white font-semibold"
            // onClick={saveDetails}
          >
            Save
          </button>
        </div>

      </div>
    </div>
  )
}

export default CreateContainer