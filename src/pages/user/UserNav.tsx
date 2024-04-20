
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.jpg'
import { useAppSelector } from '../../redux/hooks'

const UserNav = () => {
    const userProfile = useAppSelector((state)=>state.auth.userProfile)
  const profile = useAppSelector((state)=>state.auth.adminProfile)
   
  return (
    <nav className='p-2 flex justify-between w-[90%] mx-auto'>
        <div>
        <Link to={profile ? '/admin' : userProfile ? '/customer/products' : '/'} className="-m-1.5 p-1.5">
        <img className='w-[100px]' src={Logo} alt="" />
        <h1>Pani Hishab</h1>
        </Link>
        </div>
       
    </nav>
  )
}

export default UserNav