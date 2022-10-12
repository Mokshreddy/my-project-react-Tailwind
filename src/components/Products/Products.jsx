import React from 'react'
// import GetProducts from '../../Hooks/GetProducts'
// import Dropdown from '../Dropdown';



const Products = () => {

   

    
  return (
    <>
    <div className='container mx-auto'>
        <div className='flex items-center justify-between mb-6'>
         <h3 className='font-bold font-krona text-xl'>Products</h3>
         <button className='py-4 px-10 bg-yellow rounded-full ml-8'>
                Shop Now
            </button>
            <div className="relative w-full lg:max-w-sm">
            <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none " >
                
            <option selected disabled>Filter</option>
            <option>Women</option>
                <option>Men</option>
                <option>Electronics</option>
                
            </select>
             </div>
        </div>
        </div>
      
        
       


    </>

    
  )
}

export default Products
