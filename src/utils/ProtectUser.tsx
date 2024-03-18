import React from 'react'
import { useAppSelector } from '../redux/hooks'
import { Link } from 'react-router-dom'

const ProtectUser = ({children}:{children:any}) => {
    const profile = useAppSelector((state)=>state.auth.userProfile)
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

export default ProtectUser