import React, { ReactNode, useState } from 'react'

import { useRequestAdminAccountMutation } from '../redux/api/baseApi'
import toast, { Toaster } from 'react-hot-toast'



const RequestBusinessAccountPage = () => {
  const [firstName,setFirstName] = useState('')
  const [lastName,setLastName] = useState('')
  const [email,setEmail] = useState('')
  const [address,setAdress] = useState('')
  const [phone,setPhone] = useState('')
  const [password,setPassword] = useState('')
const [requestAdminAccount] = useRequestAdminAccountMutation()
  const onSubmit = async(e:any)=>{
    e.preventDefault()
    
   
    if(firstName == '' || lastName == '' || email == '' || address == '' || phone == '' || password == ''){
      console.log('all field are required');
      
      
    }else{
      const adminInfo = {
        firstName,
        lastName,
        email,
        address,
        phone,
        password
      }
      const res = await requestAdminAccount(adminInfo)
      if(res.error){
        toast.error(res.error.data.message)
      }else{
        toast.success('Admin account request successfully!')
      }
      
      
      console.log(adminInfo);
    }
    
    
    
  }
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create Management Store
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={onSubmit} className="space-y-6" action="#" method="POST">
            <div className='md:flex md:gap-4 '>
                <div className='mb-4'>
                <label htmlFor="">First Name</label>
                <br />
                <input onChange={(e)=>setFirstName(e.target.value)} className='border border-2 bg-slate-200 w-full' type="text" placeholder='first name' />
                </div>
                <div className=''>
                <label htmlFor="">Last Name</label>
                <br />
                <input onChange={(e)=>setLastName(e.target.value)} className='border border-2 bg-slate-200 w-full' type="text" placeholder='last name' />
                </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                onChange={(e)=>setEmail(e.target.value)}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
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
                <input onChange={(e)=>setPhone(e.target.value)}  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="text" />
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
                Create Store
              </button>
            </div>
          </form>

          
        </div>
        <Toaster/>
      </div>
  )
}

export default RequestBusinessAccountPage