
import { useCategoriesQuery } from '../redux/api/baseApi'
import toast, { Toaster } from 'react-hot-toast'
import { useAppSelector } from '../redux/hooks'
import { useEffect } from 'react'



const ProductPage = () => {
    
    const profile = useAppSelector((state)=>state.auth.userProfile)
    const {error,isLoading,data} = useCategoriesQuery('')
    console.log(data);
    
    useEffect(()=>{
       if(error){
        toast.error('error occured')
       } 
    },[error,data])
    const handleClickProduc = (productId:string)=>{
        console.log(productId);
        
    }
    
  return (
    <div className='p-2  md:w-[60%] md:mx-auto mt-8'>
        <div className='border-2 p-2 mb-4 bg-green-600 rounded-md text-white shadow-md'>
            <h1 className='text-2xl font-bold'>User Info</h1>
            <p>Store Id: {profile?.data?.adminStoreId}</p>
            <p>Name: {profile?.data?.name}</p>
            <p>Phone: {profile?.data?.phone}</p>
            <p>Address: {profile?.data?.address}</p>
        </div>
        <div className='p-2'>
            {
                isLoading ? <span className="loading loading-bars loading-lg"></span> : <div className='flex gap-4'>
                    {data?.data?.map((category:any,i:number)=>(
                        <div key={i} >
                            <img onClick={()=>handleClickProduc(category._id)} className='w-[200px] h-[200px] border-2 rounded-md cursor-pointer' src={category?.image?.url} alt="" />
                            <h1 className='text-2xl font-bold'>{category?.category}</h1>
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