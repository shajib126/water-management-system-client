import { FormEvent, useState } from "react";
import SellerDashboard from "../../components/seller/SellerDashboard";
import { useCreateOrderBySellerMutation, useCustomersBySellerQuery, useCustomerTotalBalanceBySellerQuery, useProductsCustomerQuery } from "../../redux/api/baseApi";
import Loading from "../Loading";
import { MutationError } from "../../utils/MutationError";
import toast, { Toaster } from "react-hot-toast";

const CustomerPage = () => {
  const { isLoading, data } = useCustomersBySellerQuery("");
  const {isLoading:productLoading,data:productData} = useProductsCustomerQuery('')
  const [createOrderBySeller] = useCreateOrderBySellerMutation()
  const [userId,setUserId] = useState(null)
  const [customerId,setCustomerId] = useState(null) 
  const [qty,setQty] = useState(0)
  const [product,setProduct] = useState('')
  

  const {data:balanceData,isLoading:balanceLoading} = useCustomerTotalBalanceBySellerQuery(customerId)

  console.log(balanceData);
  
  const createOrderHandler = async(e:FormEvent)=>{
    e.preventDefault()
    console.log(userId,product,qty);
    const orderInfo = {
        userId,
        product,
        quantity:qty
    }
    const res = await createOrderBySeller(orderInfo)
    const err = await MutationError(res)
    if(err){
        toast.error(err)
    }else{
        toast.success('Order created')
        setUserId(null)
    }
    
  }

  return (
    <SellerDashboard>
      <h1>Customers</h1>
      <div className="overflow-x-auto">
        {!customerId && <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Order</th>
            </tr>
          </thead>
          
            {isLoading ? (
              <Loading />
            ) : (
              <tbody>
                {data?.data?.map((customer: any, i: number) => (
                  <tr key={i} className="bg-base-200">
                    <th>{i + 1}</th>
                    <td onClick={()=>setCustomerId(customer._id)}>{customer?.name}</td>
                    <td>{customer?.address}</td>
                    <td>{customer?.phone}</td>
                    <td>
                        <button onClick={()=>setUserId(customer._id)} className="bg-lime-600 text-white p-2 rounded-md" disabled={customer.userRole == 'seller'}>Create Order</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
            {/* row 1 */}
          
        </table>}
        
                {userId &&  <div className="bg-green-200 p-4 md:w-[50%] mx-auto absolute top-[40%] md:left-[20%] left-[25%]">
            <h1>Create Order</h1>
            <form onSubmit={createOrderHandler}>
                {productLoading ? <Loading/> : <select value={product} onChange={(e)=>setProduct(e.target.value)} className="w-full border-2 p-2">
                    <option value="">Select Product</option>
                    {productData?.data?.product.map((p:any,i:number)=><option value={p._id} key={i}>{p.productName}</option>)}
                </select>}
                <br />
                <div>
                    <label htmlFor="">QTY</label>
                    <br />
                    <input onChange={(e)=>setQty(parseInt(e.target.value))} className="border-2 p-2 border-rose-200 rounded-md" type="number" />
                </div>
                <div>
                <button type="submit" className="btn btn-success mt-4">Create Order</button>
                <button onClick={()=>setUserId(null)} className="btn btn-outline">Cancel</button>
                </div>
                
            </form>
        </div>}
        {customerId && <div className="bg-gray-200 w-[50%] md:w-[40%] p-4 absolute top-[40%] left-[25%]">
          <select className="p-2 rounded-md">
            <option value="">Last Month</option>
            <option value="">This Month</option>
            <option value="">This year</option>
          </select>
          <h1 className="text-center font-bold">Total Balance</h1>
          {balanceLoading ? <Loading/> : <p className="text-center mt-4">{balanceData?.data > 0 ? 'Credit' : 'Due'} {balanceData?.data} TAKA</p>}
          <button onClick={()=>setCustomerId(null)} className="btn btn-warning mt-4 w-full">Close</button>
        </div>}
        
       <Toaster/>
      </div>
    </SellerDashboard>
  );
};

export default CustomerPage;
