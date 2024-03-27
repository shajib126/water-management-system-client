
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
    <div className='w-[90%] mx-auto md:border-2 p-2 rounded-md md:shadow-md mt-4 '>
      <h1 className='text-2xl font-bold mb-4'>Order History</h1>
      {isLoading ? <span className="loading loading-bars loading-lg"></span> :<table className='table'>
        <thead>
          <th>SL</th>
          <th>Name</th>
          <th>QTY</th>
          
          <th>Del.</th>
          <th>Total</th>
        </thead>
        <tbody>
          {data?.data?.map((order:any,i:number)=>(
            <tr key={i+1}>
              <th>{i+1}</th>
              <td>{order?.product?.productName}</td>
              <td>{order?.quantity}</td>
              
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