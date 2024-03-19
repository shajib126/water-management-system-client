
import { useAppSelector } from '../redux/hooks'
import { Link } from 'react-router-dom';

const ProtectAdmin = ({children}:{children:any}) => {
    const profile = useAppSelector((state)=>state.auth.adminProfile)
    console.log(profile);
    if(profile){
        return children
    }
    
  return (
    <Link to='/login'>
     Login
   </Link>
  )
}

export default ProtectAdmin