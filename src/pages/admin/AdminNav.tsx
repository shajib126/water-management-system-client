
import Logo from '../../assets/logo.jpg'
import Loading from '../Loading'


const AdminNav = ({data,isLoading}:{data:any,isLoading:boolean}) => {
  
  
  return (
    <nav className='p-2 flex justify-between w-[90%] mx-auto'>
        <div className='md:flex align-center'>
        <img className='w-[100px]' src={Logo} alt="" />
        {isLoading ? <Loading/> : <div className='px-4 mt-2'><h1 className='text-2xl font-bold text-red-700'>{data?.data.firstName}</h1>
        <p className='font-light text-[16px]'>Store Id: {data?.data.storeId}</p></div>}
        
        </div>
        
    </nav>
  )
}

export default AdminNav