import { useEffect, useState } from "react";
import { useCustomerOrdersQuery } from "../../redux/api/baseApi";

import toast, { Toaster } from "react-hot-toast";

const UserOrderHistoryPage = () => {
  const [date,setDate] = useState('')
  const { isLoading, error, data } = useCustomerOrdersQuery(date);
  
  // const navigate = useNavigate()
 

  useEffect(() => {
    if (error) {
      toast.error("error occured");
    }
    if (data?.success) {
      toast.success(data.message);
    }
  }, []);

  return (
    <div className="w-[90%] mx-auto md:border-2 p-2 rounded-md md:shadow-md mt-4 ">
      <select value={date} onChange={(e)=>setDate(e.target.value)} className="select select-bordered w-full max-w-xs">
        <option disabled selected>
          Filter By Time
        </option>
        <option value='thisMonth'>This month</option>
        <option value='thisYear'>This Year</option>
        <option value='today'>Today</option>
      </select>
      <h1 className="text-2xl font-bold mb-4">Order History</h1>
      {isLoading ? (
        <span className="loading loading-bars loading-lg"></span>
      ) : (
        <table className="table">
          <thead>
            <th>SL</th>
            <th>Name</th>
            <th>QTY</th>

            <th>Del.</th>
            <th>Total</th>
          </thead>
          <tbody>
            {data?.data?.map((order: any, i: number) => (
              <tr key={i + 1}>
                <th>{i + 1}</th>
                <td>{order?.product?.productName}</td>
                <td>{order?.quantity}</td>

                <td
                  className={
                    order?.placeOrder == false
                      ? "text-rose-600"
                      : "text-gray-600"
                  }
                >
                  {order?.placeOrder == false ? "PENDING" : "ORDER PLACED"}
                </td>
                <td>{order?.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <Toaster />
    </div>
  );
};

export default UserOrderHistoryPage;
