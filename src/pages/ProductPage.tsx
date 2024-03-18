import React, { useEffect } from 'react'
import { useCategoriesQuery } from '../redux/api/baseApi'
import toast, { Toaster } from 'react-hot-toast'
import { useAppSelector } from '../redux/hooks'

const images = [
    'https://thumbs.dreamstime.com/b/big-bottle-water-2124871.jpg',
    'https://cdn.dribbble.com/users/6224582/screenshots/17067550/cm_screenshot_4x.jpg',
    'https://static.vecteezy.com/system/resources/previews/026/826/355/non_2x/pipe-garden-hose-cartoon-illustration-vector.jpg',

]

const ProductPage = () => {
    const profile = useAppSelector((state)=>state.auth.userProfile)
    const {error,isLoading,data} = useCategoriesQuery('')
    useEffect(()=>{
       if(error){
        toast.error(error.message)
       } 
    },[error,data])
    const handleClickProduc = (productId:string)=>{
        console.log(productId);
        
    }
    
  return (
    <div className='md:flex md:justify-between md:w-[60%] md:mx-auto mt-8'>
        <div className='border-2 p-2 mb-4'>
            <h1>User Info</h1>
            <p>Store Id: {profile?.data?.adminStoreId}</p>
            <p>Name: {profile?.data?.name}</p>
            <p>Phone: {profile?.data?.phone}</p>
            <p>Address: {profile?.data?.address}</p>
        </div>
        <div className='p-2'>
            {
                isLoading ? <span className="loading loading-bars loading-lg"></span> : <div className='flex gap-4'>
                    {data?.data?.map((category,i)=>(
                        <div key={i} >
                            <img onClick={()=>handleClickProduc(category._id)} className='w-[200px] h-[200px] border-2 rounded-md cursor-pointer' src={category?.category == 'water' ? images[0] : category?.category == 'Pipe'?images[2] : images[1]} alt="" />
                            <h1>{category.category}</h1>
                        </div>
                    ))}
                </div>
            }
        </div>
        <Toaster/>
    </div>
  )
}

export default ProductPage