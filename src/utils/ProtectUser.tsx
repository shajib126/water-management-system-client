
import { useUserProfileQuery } from '../redux/api/baseApi'
import { useAppSelector } from '../redux/hooks'
import { Link } from 'react-router-dom'

const ProtectUser = ({children}:{children:any}) => {
    const profile = useAppSelector((state)=>state.auth.userProfile)
    const {isLoading,data} = useUserProfileQuery('')
    console.log(data);
    
    if(profile){
        return children
    }  
  return (
   <Link to='/login'>
    Login
   </Link>
  )
}

export default ProtectUser