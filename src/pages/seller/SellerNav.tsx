import { useNavigate } from 'react-router-dom'
import Logo from '../../assets/logo.jpg'
import { logout } from '../../redux/features/auth/authSlice'
import { useAppDispatch } from '../../redux/hooks'

const SellerNav = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const logoutHandler = ()=>{
    dispatch(logout())
    navigate('/')
  }
  return (
    <nav className='p-2 flex justify-between w-[90%] mx-auto'>
        <div>
        <img className='w-[100px]' src={Logo} alt="" />
        <h1>Pani Hishab</h1>
        </div>
        <button onClick={logoutHandler}>Logout</button>
    </nav>
  )
}

export default SellerNav