
import AdminDashboardPage from "../../pages/admin/AdminDashboardPage";
import Navbar from "../../pages/Navbar";
import { useAppSelector } from "../../redux/hooks";

const AdminDashboard = ({children}:{children:any}) => {
  const profile = useAppSelector((state)=>state.auth.adminProfile)
  console.log(profile);
  
  return (
    <div>
        <Navbar/>
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
