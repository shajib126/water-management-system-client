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
      toast.error(error?.data?.message);
    }
    if (data?.success) {
      toast.success(data?.message);
    }
  }, []);
  return (
    <div className="w-[90%] mx-auto">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold p-2 text-rose-600">Your Due</h1>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="btn"
          // onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          মোট বকেয়া!
        </button>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
          <p className="py-4">
              আপনার মোট বকেয়া!
            </p>
            <h3 className="font-bold text-lg">{total} টাকা!</h3>
            
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
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
              <tr className="text-2xl" key={i}>
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

      <Toaster />
    </div>
  );
};

export default UserDuePage;
