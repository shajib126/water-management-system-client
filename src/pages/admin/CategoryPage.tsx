import { useEffect, useState } from "react";
import { useCategoriesQuery, useCreateCategoryMutation } from "../../redux/api/baseApi";
import toast, { Toaster } from "react-hot-toast";
import { useAppDispatch } from "../../redux/hooks";
import { setCategories } from "../../redux/features/category/categorySlice";
import Loading from "../Loading";

const CategoryPage = () => {
  const dispatch = useAppDispatch()
  const [category,setCategory] = useState('')
  const [image,setImage] = useState('')
  const [createCategory] = useCreateCategoryMutation()
  const {isLoading,error,data} = useCategoriesQuery('')

  useEffect(()=>{
    if(error){
      toast.error('error occured')
    }
      
  },[isLoading,error,data])
  
  const imageChange = (e:any)=>{
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.onload = ()=>{
      if(typeof reader.result === 'string'){
        setImage(reader.result)
      }
    }
    if(file){
      reader.readAsDataURL(file)
    }
  }

  const createCategoryHandle = async(e:React.FormEvent)=>{
    e.preventDefault()
    const categoryInfo = {
      category,
      image
    }
    const res =await createCategory(categoryInfo);
    if('error' in res){
      const errorData = res.error as { data: { message: string } };
      if(errorData && errorData.data){
        toast.error(errorData.data.message);
        
      }else{
        console.log('Unexpected error', res.error);
        
      }
      
    }else{
      dispatch(setCategories(res.data))
      toast.success('Category created')
    }
    
      
  }
  return (
    <div className="md:flex md:gap-14 md:w-[80%] mx-auto mt-10">
      <form onSubmit={createCategoryHandle} className="mb-10 bg-slate-200 p-4 rounded-md">
        <div className="mb-4">
          <label htmlFor="">Category Title</label>
          <br />
          
          <input
            onChange={(e)=>setCategory(e.target.value)}
            type="text"
            required
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        <div>
          <label>Category Image</label>
          <br />
          <input
            type="file"
            name="image"
           
            accept="image/*"
            onChange={imageChange}
            className="file-input file-input-bordered file-input-primary w-full max-w-xs"
          />
        </div>
        <br />
        <button type="submit" className="btn btn-success">Create</button>
      </form>
      <div>
        
        <h1>Categories</h1>
        {isLoading ? <Loading/> : <div className="flex gap-8">
          {data?.data?.map((category:any,i:number)=>(
            <div key={i}>
              <h1>{category.category}</h1>
              <img className="w-[100px]" src={category?.image?.url} alt="" />
            </div>
          ))}
        </div> }
      
      </div>
      <Toaster/>
    </div>
  );
};

export default CategoryPage;
