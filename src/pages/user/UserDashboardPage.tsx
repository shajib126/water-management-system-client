
import { Link } from 'react-router-dom'

const UserDashboardPage = () => {
  return (
    <div className='flex  justify-between md:w-[50%] w-[100%] mx-auto border-2 p-2 border-dashed'>
      <Link className='bg-slate-500 text-white p-2 font-bold rounded-md shadow-md' to='/customer/products'>Products</Link>
      <Link className='bg-slate-500 text-white p-2 font-bold rounded-md shadow-md' to='/customer/orders'>Order History</Link>
      <Link className='bg-slate-500 text-white p-2 font-bold rounded-md shadow-md' to='/customer/due'>Due</Link>
      <Link className='bg-slate-500 text-white p-2 font-bold rounded-md shadow-md' to='/customer/credit'>Credit</Link>
    </div>
  )
}

export default UserDashboardPage