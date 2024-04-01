import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { logout } from "../../redux/features/auth/authSlice";

const menu = [
  {
    name:'Dashboard',
    link:'/admin'
  },
  {
    name:'Create Product',
    link:'/admin/create-product'
  },
  {
    name:'Products',
    link:'/admin/product'
  },
  
  {
    name:'Orders',
    link:'/admin/orders'
  },
  {
    name:'Customers',
    link:'/admin/customers'
  },
  {
    name:'Add Price',
    link:'/admin/additional-price'
  },
  {
    name:'Bottle Entry',
    link:'/admin/bottle'
  },
]

const AdminDashboardPage = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const handleLogout = ()=>{
    dispatch(logout())
    navigate('/login')
  }
  return (
    <div>
    
      <div className="md:bg-slate-100  md:w-[100%]   md:flex md:h-screen md:flex-col md:justify-between md:border-e hidden">
        <div className="px-4 py-6">
          <ul className="mt-6 space-y-1">
            <li>
              <Link
                to="/admin"
                className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
              >
                Dashboard
              </Link>
            </li>

            <li>
              <Link
                to="/admin/create-product"
                className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
              >
                Create Product
              </Link>
            </li>
            <li>
              <Link
                to="/admin/product"
                className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
              >
                Products
              </Link>
            </li>
          
            <li>
              <Link
                to="/admin/orders"
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                Orders
              </Link>
            </li>

            <li>
              <Link
                to="/admin/customers"
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                Customers
              </Link>
            </li>
            <li>
              <Link
                to="/admin/additional-price"
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                Additional Price
              </Link>
            </li>
            <li>
              <Link
                to="/admin/bottle"
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                Bottle Entry
              </Link>
            </li>
          </ul>
          
        </div>
      </div>
      <button onClick={handleLogout} className=" md:sticky md:absolute md:bottom-[20%] md:left-2 md:w-[100%] md:btn md:btn-warning hidden">Logout</button>
      <button onClick={handleLogout} className="md:hidden absolute top-[5%] right-2 btn btn-warning">Logout</button>
      <ul className="bg-lime-500 rounded-md w-full menu menu-horizontal bg-base-200 md:hidden">
        {menu.map((item,i)=>(
          <li key={i} className="border-2 rounded-md m-2 text-teal-950 font-bold text-[14px]">
            <Link to={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default AdminDashboardPage;
