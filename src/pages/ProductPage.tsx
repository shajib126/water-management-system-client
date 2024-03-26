
import { useCreateOrderMutation, useProductsCustomerQuery } from '../redux/api/baseApi'
import toast, { Toaster } from 'react-hot-toast'
import { useAppSelector } from '../redux/hooks'
import { useEffect, useState } from 'react'
import Loading from './Loading'
import { MutationError } from '../utils/MutationError'
import { useNavigate } from 'react-router-dom'



const ProductPage = () => {
    const [qty,setQty] = useState(0)
    const profile = useAppSelector((state)=>state.auth.userProfile)
    const {error,isLoading,data} = useProductsCustomerQuery('')
    const [createOrder] = useCreateOrderMutation()
    const navigate = useNavigate()
    
    useEffect(()=>{
       if(error){
        toast.error('error occured')
       } 
    },[error,data])
    const handleClickProduc = async(productId:string)=>{
        const order = {
            product:productId,
            quantity:qty

        }
        const res = await createOrder(order)
        const error = await MutationError(res)
        if(error){
            toast.error(error)
        }else{
            toast.success('Order created')
            navigate('/customer/orders')
        }
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
        
        <div >
            {isLoading ? <Loading/> : <div className='md:flex gap-4'>
                    {data?.data?.product.map((item:any,i:number)=>(
                        <div className='mb-4 md:mb-0 border-2 md:w-[30%]  p-2 w-[80%] mx-auto md:mx-0 rounded-md' key={i}>
                            
                            <br />
                            <img src={item?.productCategory?.image?.url} alt="" />
                            <h1 className='font-bold'> {item.productName}</h1>
                            <h1 className=''>{item.subtotal} টাকা * qty</h1>
                            
                            <label htmlFor="">পরিমান/QTY:</label>
                            <br />
                            <input onChange={(e)=>setQty(parseInt(e.target.value))} type="number" className="input input-bordered input-error w-[40%] mb-2" />
                            <br />
                            <p>Total : {qty > 0 ? item.subtotal * qty : 0} টাকা</p>
                            <button disabled={!qty || qty < 0} onClick={()=>handleClickProduc(item._id)} className='w-full btn btn-success'>Order Now</button>
                        </div>
                    ))}
                </div>}
        </div>
        <Toaster/>
    </div>
  )
}

export default ProductPage