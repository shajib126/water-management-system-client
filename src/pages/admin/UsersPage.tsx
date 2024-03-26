
import { useState } from "react";
import { useCustomersQuery, useEditUserRoleMutation } from "../../redux/api/baseApi";
import Loading from "../Loading";
import { MutationError } from "../../utils/MutationError";
import toast, { Toaster } from "react-hot-toast";

const UsersPage = () => {
  const [editRole,setEditRole] = useState(null)
  const [userRole,setUserRole] = useState('')
  const { error, isLoading, data } = useCustomersQuery("");
  const [editUserRole] = useEditUserRoleMutation()
 

  const handleUserRole = async()=>{
    const params = editRole
   
    
    const res = await editUserRole({params,userRole})
    const err = await MutationError(res)
    if(err){
      toast.error(err)
    }
    toast.success('user role changed')
    setEditRole(null)
  }

  return (
    <div>
        {isLoading ? <Loading/> :<div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              
              <th>User</th>
              <th>Address</th>
              
              <th>User Role</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {data?.data.map((user:any,i:number) => (
              <tr key={i}>
                
                <td>
                  <div className="flex items-center gap-3">
                    {/* <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="/tailwind-css-component-profile-2@56w.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div> */}
                    <div>
                      <div className="font-bold">{user.name}</div>
                      <div className="text-sm opacity-50">{user.phone}</div>
                      <div className="text-sm opacity-50">{user.userType}</div>
                    </div>
                  </div>
                </td>
                <td>
                 {user.address}
                </td>
               
                <th className="cursor-pointer" onClick={()=>setEditRole(user._id)}>
                  {user.userRole}
                </th>
               
              </tr>
            ))}
          </tbody>
          {/* foot */}
        </table>
{editRole && <div className="bg-green-600 w-[80%] md:w-[50%] p-2 absolute top-[45%] left-[10%] md:left-[20%]">
          <select value={userRole} onChange={(e)=>setUserRole(e.target.value)} className="w-full mx-auto p-2">
            <option>Select Role</option>
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
          </select>
          <br />
          <div className="flex gap-2 justify-end">
          <button onClick={handleUserRole} className=" mt-4 btn btn-success">Change</button>
          <button onClick={()=>setEditRole(null)} className="mt-4 btn btn-warning">Cancel</button>
          </div>
          
        </div>}
        
      </div> }
      <Toaster/>
    </div>
  );
};

export default UsersPage;
