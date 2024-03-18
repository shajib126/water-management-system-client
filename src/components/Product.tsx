
import ProductPage from "../pages/ProductPage";
import UserDashboard from "./user/UserDashboard";
import ProtectUser from "../utils/ProtectUser";

const Product = () => {
  return (
    <ProtectUser>
      <UserDashboard>
        <ProductPage />
      </UserDashboard>
    </ProtectUser>
  );
};

export default Product;
