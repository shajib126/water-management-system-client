import { Link } from "react-router-dom"
import { useState } from 'react'

import { useAppDispatch, useAppSelector } from "../redux/hooks"
import logo from '../assets/logo.jpg'
import avatar from '../assets/avatar.png'
import { logout } from "../redux/features/auth/authSlice"



const Navbar = () => {
  const [showMenu,setShowMenu] = useState(false)
  const dispatch = useAppDispatch()
  const userProfile = useAppSelector((state)=>state.auth.userProfile)
  const profile = useAppSelector((state)=>state.auth.adminProfile)
  return (
    <header className="sticky absolute inset-x-0 top-0 z-50">
        <nav className=" flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex ">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">WMS</span>
              <img className="w-[100px] h-[80px]" src={logo} alt="" />
              <h1>Pani hishab</h1>
            </Link>
          </div>
          
          <div className="  ">
            {userProfile || profile ? <img onClick={()=>setShowMenu(!showMenu)} className="w-[100px]" src={avatar} alt="" /> : <Link to='/login'>Login</Link>}
            {showMenu && profile && <div className="absolute text-center border-2 p-2  rounded-md">
              <h1>Hello, {`${profile.firstName} ${profile.lastName}`}</h1>
              <Link to='/admin'>Dashboard</Link>
              <br />
              <button onClick={()=>dispatch(logout())} className="btn btn-outline btn-secondary">Logout</button>
              </div>}
            {
              showMenu && userProfile && <div className="absolute text-center border-2 p-2  rounded-md">
                <h1>hello, {userProfile?.data?.name}</h1>
               
                <button className="btn btn-outline btn-success">
                <Link to='/customer/products'>User Profile</Link>
                </button>
                <br />
                <br />
                <button onClick={()=>dispatch(logout())} className="btn btn-outline btn-secondary">Logout</button>
              </div> 
             
            }
            
          </div>
        </nav>
        
      </header>
  )
}

export default Navbar