import React, { useEffect, useState } from "react";
import { useAllOrdersQuery } from "../../redux/api/baseApi";

const OrdersPage = () => {
  const { isLoading, error, data } = useAllOrdersQuery('isPaid=false&placeOrder=true');
  console.log(data?.data);
useEffect(()=>{

},[])
  const [showPlaceOrder,setShowPlaceOrder] = useState(false)

  return (
    <div>
      {isLoading ? (
        <span className="loading loading-bars loading-lg"></span>
      ) : (
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Product</th>
                <th>QTY</th>
                <th>Place Order?</th>
                <th>Paid?</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {data?.data.map((order, i:number) => (
                <tr className="bg-base-200">
                  <th>{i+1}</th>
                  <td>{order?.product?.productName}</td>
                  <td>{order?.quantity}</td>
                  <div>
                  <td onClick={()=>setShowPlaceOrder(!showPlaceOrder)}>{order?.placeOrder ? 'Done' :'Pending' }</td>
                  {
                    showPlaceOrder && <select>
                        <option>Order status</option>
                    <option value='true' key="">Done</option>
                    <option value="false">Pending</option>
                  </select>
                  }
                  
                  </div>
                  
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
