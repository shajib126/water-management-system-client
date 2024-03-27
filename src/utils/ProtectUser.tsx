
import Loading from '../pages/Loading'
import { useUserProfileQuery } from '../redux/api/baseApi'
import { Link } from 'react-router-dom'

const ProtectUser = ({children}:{children:any}) => {
    const {isLoading,data} = useUserProfileQuery('')
    console.log(data);
    if(isLoading){
      return <Loading/>
    }
    if(data?.data){
        return children
    }  
  return (
   <Link to='/login'>
    Login
   </Link>
  )
}

export default ProtectUser