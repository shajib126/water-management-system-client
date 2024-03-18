import React from "react";
import UserDashboard from "./UserDashboard";
import UserDuePage from "../../pages/user/UserDuePage";
import ProtectUser from "../../utils/ProtectUser";

const UserDue = () => {
  return (
    <ProtectUser>
      <UserDashboard>
        <UserDuePage />
      </UserDashboard>
    </ProtectUser>
  );
};

export default UserDue;
