import { useCustomerBalanceQuery } from "../../redux/api/baseApi"
import Loading from "../Loading"


const UserCreditPage = () => {
  const {isLoading,data} = useCustomerBalanceQuery('')
  return (
    <div className="w-[90%] bg-emerald-700 md:w-[40%] mx-auto mt-8 p-2 text-center h-[30vh] rounded-md shadow-md">
        <h1 className="text-3xl font-bold text-rose-500 text-center">Credit</h1>
        <h1 className="text-2xl font-bold mt-4">Your Balance:</h1>
        {isLoading ? <Loading/> : 
        <h2 className="mt-4 text-2xl text-rose-950 font-bold">{data?.data} TAKA</h2>
  }
    </div>
  )
}

export default UserCreditPage