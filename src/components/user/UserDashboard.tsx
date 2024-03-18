
import Navbar from "../../pages/Navbar";
import UserDashboardPage from "../../pages/user/UserDashboardPage";
import ProtectUser from "../../utils/ProtectUser";

const UserDashboard = ({ children }: any) => {
  return (
    <ProtectUser>
      <div>
        <Navbar />
        <div>
          <UserDashboardPage />
          <div>{children}</div>
        </div>
      </div>
    </ProtectUser>
  );
};

export default UserDashboard;
