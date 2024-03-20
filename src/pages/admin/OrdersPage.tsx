
import { useEffect, useState } from "react";
import { useAllOrdersQuery } from "../../redux/api/baseApi";

const OrdersPage = () => {
  const { isLoading, data } = useAllOrdersQuery('');
  // const query = 'isPaid=false&placeOrder=true'
  // const [showOrder,setShowOrder] = useState(false)
  const [orderStatus,setOrderStatus] = useState('')
  // const handleSaveChange = (order:any)=>{
  //   console.log(order);
    
  // }
  useEffect(()=>{

  },[])
  console.log(orderStatus);
  
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
                <tr className="bg-base-200 text-[16px]">
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
                    <div>
                    {order?.placeOrder ? 'Done' :'Pending' }
                    
                    <select  value={orderStatus} onChange={(e)=>setOrderStatus(e.target.value)}>
                        <option>Order status</option>
                    <option  value='true' key="">Done</option>
                    <option value="false">Pending</option>
                  </select>
                  
               
                    </div>
                  
                  </td>
                  
                  <td>{order?.isPaid ? 'Paid' :'Due'}</td>
                  
                  <td>{order?.total}</td>
                 
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default OrdersPage;
