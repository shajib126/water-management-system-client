import React, { useState } from "react";
import { useCategoriesQuery, useCreateProductMutation } from "../../redux/api/baseApi";

type TCategory = {
  _id:string;
  category:string;
  createdAt:string;
  updatedAt:string;

}
const CreateProductPage = () => {
  const { isLoading, data, error } = useCategoriesQuery("");
  const [productCategory,setProductCategory] = useState('')
  const [productName,setProductName] = useState('')
  const [productSize,setProductSize] = useState('')
  const [sizeType,setSizeTYpe] = useState('')
  const [initialPrice,setInitialPrice] = useState<number | undefined>(null)
const [createProduct] = useCreateProductMutation()

const handleCreateProduct = (e:React.FormEvent)=>{
  e.preventDefault()
  const productInfo = {
    productCategory,
    productName,
    initialPrice
  }
  createProduct(productInfo);
  
}

  return (
    <form onSubmit={handleCreateProduct} className="md:w-[50%] mx-auto p-8 h-[50vh] rounded-md ">
      <div className="p-2 mb-8">
        <select value={productCategory} onChange={(e)=>setProductCategory(e.target.value)} className="p-2 border-2 border-black w-full">
          {data?.data?.map((category:TCategory, i:number) => (
           
             
              <option key={i} value={category._id}>{category.category}</option>
            
          ))}
        </select>
      </div>
      <div className="p-2 mb-8">
        <label htmlFor="">Product Name</label>
        <br />
        <input
          onChange={(e)=>setProductName(e.target.value)}
          className="border-2 border-black w-full p-2"
          type="text"
          placeholder="product name"
        />
      </div>
      <div className="p-2 mb-8">
        <label htmlFor="">Price</label>
        <br />
        <input
        onChange={(e)=>setInitialPrice(parseInt(e.target.value))}
          className="border-2 border-black w-full p-2"
          type="number"
          placeholder="Price"
        />
      </div>
      <button type="submit" className="font-bold px-4 py-3  bg-lime-700 text-white rounded-md mt-4">
        Create Product
      </button>
    </form>
  );
};

export default CreateProductPage;
