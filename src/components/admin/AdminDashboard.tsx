
import AdminDashboardPage from "../../pages/admin/AdminDashboardPage";
import AdminNav from "../../pages/admin/AdminNav";
import Loading from "../../pages/Loading";
import { useAdminProfileQuery } from "../../redux/api/baseApi";


const AdminDashboard = ({children}:{children:any}) => {
 const {isLoading,data} = useAdminProfileQuery('')

 
  
  return (
    <div>
      <div className=" items-center">
      <AdminNav isLoading={isLoading} data={data} />
      
      
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
