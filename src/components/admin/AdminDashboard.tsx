
import AdminDashboardPage from "../../pages/admin/AdminDashboardPage";
import Loading from "../../pages/Loading";
import Navbar from "../../pages/Navbar";
import { useAdminProfileQuery } from "../../redux/api/baseApi";


const AdminDashboard = ({children}:{children:any}) => {
 const {isLoading,data} = useAdminProfileQuery('')
 console.log(data?.data);
 
  
  return (
    <div>
      <div className="flex items-center">
      <Navbar/>
      {isLoading ? <Loading/> :<div>
        <h1 className="text-2xl font-bold">{data?.data.firstName} LTD</h1>
        <h1>Store Id: {data?.data.storeId}</h1>
      </div> }
      
      </div>
        
        
    <div className="md:flex md:gap-2">
      <AdminDashboardPage/>
      <div className=" md:w-[90%] md:bg-slate-100 md:rounded-md p-2 mx-auto border-2 border-dashed">
        {children}
      </div>
    </div>
    </div>
  );
};

export default AdminDashboard;
