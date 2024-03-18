
import UserDashboard from "./UserDashboard";
import UserCreditPage from "../../pages/user/UserCreditPage";
import ProtectUser from "../../utils/ProtectUser";

const UserCredit = () => {
  return (
    <ProtectUser>
      <UserDashboard>
        <UserCreditPage />
      </UserDashboard>
    </ProtectUser>
  );
};

export default UserCredit;
