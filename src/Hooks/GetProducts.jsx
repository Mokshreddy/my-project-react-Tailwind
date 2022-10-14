
import React, {useState,useEffect} from 'react';
// import Products from '../components/Products';
const GetProducts = () => {
    const [category,setCategory]= useState([]);
    console.log (category);
    useEffect(()=>{
        const categoryProduct = async() => {
            const response = await fetch("https://fakestoreapi.com/products");
            // console.log(response);
            const jsonData = await response.json();
            // console.log(jsonData);
            setCategory(jsonData);
        }
        categoryProduct();
    },[])


   
  return (
    <div className='flex flex-wrap p-5 items-center justify-center mobile:flex-col'>
        {category.map((values) =>{
            return(
            <div className='w-6/12 sm:w-4/12 px-40'
            >
            <img  src={values.image} alt={""} className='shadow rounded max-w-full h-80' />
                    
              <div><h5 className='text-sm text-gray-700 font-krona mt-3'>Name:{values.title}</h5>
                            
          <h5 className="text-sm text-gray-700 font-krona mt-3 ">Price:${values.price}</h5>
                                       
             </div>  
             {/* <Products category={values.category} onCategoryChange={changeCategoryInfo}/> */}
             </div>
             
            )
           })}
    </div>
  )
}

export default GetProducts;




