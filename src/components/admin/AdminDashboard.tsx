
import AdminDashboardPage from "../../pages/admin/AdminDashboardPage";
import Navbar from "../../pages/Navbar";
import { useAppSelector } from "../../redux/hooks";

const AdminDashboard = ({children}:{children:any}) => {
  const profile = useAppSelector((state)=>state.auth.adminProfile)
  console.log(profile);
  
  return (
    <div>
        <Navbar/>
    <div className="flex gap-2">
      <AdminDashboardPage/>
      <div className=" w-[90%] bg-slate-100 rounded-md p-2 mx-auto border-2 border-dashed">
        {children}
      </div>
    </div>
    </div>
  );
};

export default AdminDashboard;
