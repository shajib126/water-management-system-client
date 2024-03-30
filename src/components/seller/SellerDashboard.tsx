import SellerMenu from "../../pages/seller/SellerMenu"
import SellerNav from "../../pages/seller/SellerNav"


const SellerDashboard = ({children}:{children:any}) => {
  return (
    <div>
      <SellerNav/>
      <SellerMenu/>
      <div className="w-[90%] mx-auto">
        {children }
      </div>
    </div>
  )
}

export default SellerDashboard