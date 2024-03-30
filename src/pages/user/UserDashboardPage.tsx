
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../../redux/hooks'
import { logout } from '../../redux/features/auth/authSlice'

const menu = [
  {
    name:'Products',
    link:'/customer/products'
  },
  {
    name:'Order History',
    link:'/customer/orders'
  },
  {
    name:'Due',
    link:'/customer/due'
  },
  {
    name:'Credit',
    link:'/customer/credit'
  }
]

const UserDashboardPage = () => {
  const dispatch = useAppDispatch()
  return (
    <div className=''>
      <button onClick={()=>dispatch(logout())} className='btn btn-warning absolute top-0 right-4 top-[7%]'>Logout</button>
     <ul className="bg-lime-500 rounded-md w-full menu menu-horizontal bg-base-200 ">
        {menu.map((item,i)=>(
          <li key={i} className="border-2 rounded-md m-2 text-teal-950 font-bold text-[14px]">
            <Link to={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserDashboardPage