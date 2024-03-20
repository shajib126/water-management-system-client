import { FormEvent, useEffect, useState } from "react"
import { useApprovedAdminQuery, useCustomerRegistrationMutation } from "../redux/api/baseApi"
import toast, { Toaster } from "react-hot-toast"


const UserSignUpPage = () => {
  const [customerRegistration] = useCustomerRegistrationMutation('')
  const {isLoading,error,data} = useApprovedAdminQuery('')
  const [adminStoreId,setAdminStoreId] = useState('')
  const [name,setName] = useState('')
  const [phone,setPhone] = useState('')
  const [address,setAdress] = useState('')
  const [password,setPassword] = useState('')

  
  

  useEffect(()=>{
    if(error){
      toast.error(`error occured`)
    }
  },[error,isLoading])

  const createUser = async(e:FormEvent)=>{
    e.preventDefault()
    const customerInfo = {
      adminStoreId,
      name,
      address,
      phone,
      password
    }

  
    
     await customerRegistration(customerInfo);
   toast.success('Customer created successfully')
    
    
  }
  
  return (
    <div className=" flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
         
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign Up
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={createUser} className="space-y-6" action="#" method="POST">
            <div>
              {isLoading == false &&  <select value={adminStoreId} onChange={(e)=>setAdminStoreId(e.target.value)}>
                    <option >Select Store Id</option>
                    {data?.data?.map((admin:any,i:number)=>(
                      <option key={i} value={ admin.storeId}>{admin.firstName} { admin.lastName}</option>
                    ))}
                   
                </select>}
               
            </div>
            
            <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Name
              </label>
              <div className="mt-2">
                <input
                onChange={(e)=>setName(e.target.value)}
                  id="name"
                  name="name"
                  type="text"
                  
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
                <label htmlFor="">Address</label>
                <textarea onChange={(e)=>setAdress(e.target.value)} className='border border-2 w-full'></textarea>
            </div>
            <div>
                <label htmlFor="">Phone</label>
                <input onChange={(e)=>setPhone(e.target.value)} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="number" />
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                
              </div>
              <div className="mt-2">
                <input
                  onChange={(e)=>setPassword(e.target.value)}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign Up
              </button>
            </div>
          </form>

          
        </div>
        <Toaster/>
      </div>
  )
}

export default UserSignUpPage