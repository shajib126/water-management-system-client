
import Loading from '../pages/Loading';
import { useAdminProfileQuery } from '../redux/api/baseApi';

import { Link } from 'react-router-dom';

const ProtectAdmin = ({children}:{children:any}) => {
    
    const {isLoading,data} = useAdminProfileQuery('')
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

export default ProtectAdmin