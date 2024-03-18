import React from "react";
import UserDashboard from "./UserDashboard";
import UserOrderHistoryPage from "../../pages/user/UserOrderHistoryPage";
import ProtectUser from "../../utils/ProtectUser";

const UserOrderHistory = () => {
  return (
    <ProtectUser>
      <UserDashboard>
        <UserOrderHistoryPage />
      </UserDashboard>
    </ProtectUser>
  );
};

export default UserOrderHistory;
