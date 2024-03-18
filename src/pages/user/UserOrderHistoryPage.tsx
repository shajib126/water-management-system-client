
import { useEffect } from 'react';
import { useCustomerOrdersQuery } from '../../redux/api/baseApi'

import toast, {  Toaster } from 'react-hot-toast';


const UserOrderHistoryPage = () => {
  const {isLoading,error,data} = useCustomerOrdersQuery('')
  // const navigate = useNavigate()
  console.log(data);
  
useEffect(()=>{
  
  if(error){
    toast.error('error occured')
    
  }
  if(data?.success){
    toast.success(data.message)
  }
},[])
  
  return (
    <div className='w-[90%] mx-auto md:border-2 p-2 rounded-md md:shadow-md mt-4 md:h-[100vh]'>
      <h1 className='text-2xl font-bold mb-4'>Order History</h1>
      {isLoading ? <span className="loading loading-bars loading-lg"></span> : <table className='table'>
      <thead>
      <tr>
        <th>SL.</th>
        <th>Product Name</th>
        <th>QTY</th>
        <th>Paid?</th>
        <th>Status</th>
        <th>Total</th>
      </tr>
    </thead>
    <tbody>
    {data?.data?.map((order:any,i:number)=>(
            <tr className='text-2xl text-gray-500' key={i}>
              <th>{i+1}</th>
              <td>{order?.product.productName}</td>
              <td>{order?.quantity}</td>
              <td className={order?.isPaid == true ? 'text-gray-600' : 'text-rose-600'}>{order?.isPaid == false ? 'NOT PAID' : 'PAID'}</td>
              <td className={order?.placeOrder == false ? 'text-rose-600' : 'text-gray-600'}>{order?.placeOrder == false ? "PENDING" : 'ORDER PLACED'}</td>
              <td>{order?.total}</td>
            </tr>
          ))}

    </tbody>
          
        </table>}
      <Toaster/>
    </div>
  )
}

export default UserOrderHistoryPage