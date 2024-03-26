
import { useEffect, useState } from "react";
import { useAllOrdersQuery, useEditOrderMutation } from "../../redux/api/baseApi";
import { MdOutlineModeEdit } from "react-icons/md";
import { MutationError } from "../../utils/MutationError";
import toast, { Toaster } from "react-hot-toast";


const OrdersPage = () => {
  const { isLoading, data } = useAllOrdersQuery('');
  // const query = 'isPaid=false&placeOrder=true'
  const [showOrder,setShowOrder] = useState(null)
  const [editOption,setEditOption] = useState('')
  const [optionValue,setOptionValue] = useState('')
  const [editOrder] = useEditOrderMutation()
  const handleSaveChange = async(order:any)=>{
    const value = optionValue == 'true' ? true : false
    
    
    
    const params = order._id
    if(editOption == 'delevery'){
      const orderInfo = {
        placeOrder: value
      }
      const res = await editOrder({params,orderInfo})
      const err = await MutationError(res)
      if(err){
        toast.error(err)
      }
      toast.success('Edited')
      setShowOrder(null)
      
    }
    if(editOption == 'paid'){
      const orderInfo = {
        isPaid:value
      }
      const res = await editOrder({params,orderInfo})
      const err = await MutationError(res)
      if(err){
        toast.error(err)
      }
      toast.success('Edited')
      setShowOrder(null)
    }

    
  }
  useEffect(()=>{

  },[])
 
  
  return (
    <div>
      {isLoading ? (
        <span className="loading loading-bars loading-lg"></span>
      ) : (
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="">
                <th></th>
                <th>Product</th>
                <th>QTY</th>
                <th>Place Order?</th>
                <th>Paid?</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {data?.data.map((order:any, i:number) => (
                <tr key={i} className="bg-base-200 text-[16px]">
                  <th>{i+1}</th>
                  <td>
                    <div>
                    {order?.product?.productName}
                    <br />
                    {order?.user?.name}
                    <br />
                    {order?.user?.address}
                    </div>
                    
                  </td>
                  <td>{order?.quantity}</td>
                 
                  <td>
                    
                    {order?.placeOrder ? 'Done' :'Pending' }
                  
                    
                    {/* <select  value={orderStatus} onChange={(e)=>setOrderStatus(e.target.value)}>
                        <option>Order status</option>
                    <option  value='true' key="">Done</option>
                    <option value="false">Pending</option>
                  </select> */}
                  
               
                   
                  
                  </td>
                  
                  <td>{order?.isPaid ? 'Paid' :'Due'}</td>
                  
                  <td>{order?.total}</td>
                  <td>
                    <MdOutlineModeEdit onClick={()=>setShowOrder(order)} />
                  </td>
                 
                </tr>
              ))}
            </tbody>
          </table>
          {
            showOrder && <div className="rounded-md shadow-sm inline-block md:w-[40%] w-[80%] border-2 absolute top-[40%] left-[10%] md:top-[20%] md:left-[30%] bg-emerald-800 h-[40vh] md:h-[50vh] ">
              <div className="md:w-[50%] w-[80%] mx-auto mt-[10%]">
              <select className="mb-8 w-full p-2 rounded-md" value={editOption} onChange={(e)=>setEditOption(e.target.value)}>
                <option>Select Edit item</option>
                <option value="delevery">Place Order</option>
                <option value="paid">PaymentStatus</option>
              </select>
              <br />
              {
               editOption ? editOption == 'delevery' ? <select value={optionValue} onChange={(e)=>setOptionValue(e.target.value)} className="mb-8 w-full p-2 rounded-md">
                  <option>Order Status</option>
                  <option value="true">Done</option>
                  <option value="false">Pending</option>
                </select> : <select className="mb-8 w-full p-2 rounded-md" value={optionValue} onChange={(e)=>setOptionValue(e.target.value)}>
                  <option>Payment Status</option>
                  <option value="true">Paid</option>
                  <option value="false">Due</option>
                </select> : null
              }
              <br />
              <div className="flex gap-6 justify-end">
              <button onClick={()=>handleSaveChange(showOrder)} className="border-1 bg-lime-400 p-2 rounded-md font-bold">Save</button>
              <button onClick={()=>setShowOrder(null)} className="border-1 bg-rose-400 p-2 rounded-md font-bold">Cancel</button>
              </div>
             
              </div>
            </div>
          }
        </div>
      )}
      <Toaster/>
    </div>
  );
};

export default OrdersPage;
