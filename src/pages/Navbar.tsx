import { Link } from "react-router-dom"


import {  useAppSelector } from "../redux/hooks"
import logo from '../assets/logo.jpg'
// import { useAdminProfileQuery, useUserProfileQuery } from "../redux/api/baseApi"





const Navbar = () => {
  const userProfile = useAppSelector((state)=>state.auth.userProfile)
  const profile = useAppSelector((state)=>state.auth.adminProfile)
// const {data:adminData} = useAdminProfileQuery('')
// const {data:userData} = useUserProfileQuery('')

 
 
  return (
    <header className="sticky absolute inset-x-0 top-0 z-50">
        <nav className=" flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex ">
            <Link to={profile ? '/admin' : userProfile ? '/customer/products' : '/'} className="-m-1.5 p-1.5">
              <span className="sr-only">WMS</span>
              <img className="w-[100px] h-[80px]" src={logo} alt="" />
              <h1>Pani hishab</h1>
            </Link>
          </div>
          
          {/* { adminData?.success || userData?.success ? '' :<Link to='/login'> <button>Login</button> </Link> } */}
          
        </nav>
        
      </header>
  )
}

export default Navbar