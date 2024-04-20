
import UserDashboardPage from "../../pages/user/UserDashboardPage";
import UserNav from "../../pages/user/UserNav";
import ProtectUser from "../../utils/ProtectUser";

const UserDashboard = ({ children }: any) => {
  return (
    <ProtectUser>
      <div>
        <UserNav />
        <div>
          <UserDashboardPage />
          <div>{children}</div>
        </div>
       
      </div>
    </ProtectUser>
  );
};

export default UserDashboard;
