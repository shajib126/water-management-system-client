import { FormEvent, useState } from "react"
import SellerDashboard from "../../components/seller/SellerDashboard"
import { useAddBalanceBySellerMutation, useCustomersBySellerQuery, useCustomerTotalBalanceBySellerQuery } from "../../redux/api/baseApi"
import Loading from "../Loading"
import toast, { Toaster } from "react-hot-toast"
import { MutationError } from "../../utils/MutationError"

const BalancePage = () => {
  const [addBalanceBySeller] = useAddBalanceBySellerMutation()
  const {isLoading,data} = useCustomersBySellerQuery('')
  const [showBalance,setShowBalance] = useState(null)
  const [amount,setAmount] = useState(0)
  const [customerId,setCustomerId] = useState('')
  const {isLoading:custoemrTotalBalanceLoading,data:customerTotalBalanceData} = useCustomerTotalBalanceBySellerQuery({userId:customerId})
console.log(customerTotalBalanceData);

  const totalBalanceHandler = (id:string)=>{
    setCustomerId(id);
    
  }
  
  const addBalanceHandler = async(e:FormEvent)=>{
    e.preventDefault()
    
    try {
      const res = await addBalanceBySeller({userId:showBalance,amount})
      const error = await MutationError(res)
      if(error){
        toast.error(error)
      }else{
        toast.success('Balance added')
        setShowBalance(null)
      } 
    } catch (error) {
      const errorData = error as {data:{message:string}}
      toast.error(errorData.data.message);
      
    }
  }
  return (
    <SellerDashboard>
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>address</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    {isLoading ? <Loading/> :  <tbody>
      {data?.data.map((customer:any,i:number)=>(
        <tr key={i}>
        <th>{i+1}</th>
        <td onClick={()=>totalBalanceHandler(customer?._id)}>{customer?.name}</td>
        <td>{customer?.address}</td>
        <td>
          <button disabled={customer?.userRole == 'seller'} className="btn btn-success" onClick={()=>setShowBalance(customer._id)}>Add Balance</button>
        </td>
      </tr>
      ))}
      {/* row 1 */}
      
      
    </tbody>}
   
  </table>
  {showBalance && <form onSubmit={addBalanceHandler} className="bg-gray-200 p-4 md:w-[60%] w-full absolute top-[30%] left-[20%]">
    <div>
      <label className="font-bold">Amount</label>
      <br />
    <input onChange={(e)=>setAmount(parseInt(e.target.value))} className="md:w-[60%] w-full p-2 border-2" type="number" />
    </div>
    <div className="flex gap-4 mt-4">
      <button type="submit" className="btn btn-success">Add</button>
      <button onClick={()=>setShowBalance(null)} className="btn btn-warning">Cancel</button>
    </div>
    
  </form>}

  <h1>Total Balance</h1>
  <p>{customerTotalBalanceData?.data} TAKA</p>
  <Toaster/>
</div>
    </SellerDashboard>
  )
}

export default BalancePage