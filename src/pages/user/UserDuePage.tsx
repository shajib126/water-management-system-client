import { useEffect } from "react";
import { useCustomerDueQuery } from "../../redux/api/baseApi";
import toast, { Toaster } from "react-hot-toast";

const UserDuePage = () => {
  const { isLoading, error, data } = useCustomerDueQuery("");
  const total = data?.data?.reduce((acc:number, curr:any) => {
    return acc + curr.total;
  }, 0);


  useEffect(() => {
    if (error) {
      toast.error('error occured');
    }
    if (data?.success) {
      toast.success(data?.message);
    }
  }, []);
  return (
    <div className="w-[90%] mx-auto">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold p-2 text-rose-600">Your Due</h1>
        
      </div>

      {isLoading ? (
        <span className="loading loading-bars loading-lg"></span>
      ) : (
        <table className="table ">
          <thead>
            <tr>
              <th>SL.</th>
              <th>Product Name</th>
              <th>QTY</th>

              <th>Status</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((due:any, i: number) => (
              <tr className="" key={i}>
                <th>{i + 1}</th>
                <td>{due?.product.productName}</td>
                <td>{due?.quantity}</td>
                <td>{due?.plcaeOrder == false ? "PENDING" : "ORDER PLACED"}</td>
                <td>{due?.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div className="flex justify-end">
      <h1>মোট বকেয়া: {total} টাকা</h1>
      </div>
    
      <Toaster />
    </div>
  );
};

export default UserDuePage;
