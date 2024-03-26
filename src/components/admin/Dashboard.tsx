import Loading from "../../pages/Loading";
import { useAllOrdersQuery, useCustomersQuery } from "../../redux/api/baseApi";
import AdminDashboard from "./AdminDashboard";

const Dashboard = () => {
  const {isLoading:orderLoading,data:orderData} = useAllOrdersQuery('')
  const {isLoading:customerLoading,data:customerData} = useCustomersQuery('')
  return (
    <AdminDashboard>
      <div className="md:flex md:gap-8">
        <div className="card  bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Total Order</h2>
            {orderLoading ? <Loading/> :  <p>{orderData?.data.length}</p>}
           
            
          </div>
        </div>
        <br />
        <div className="card  bg-success text-success-content">
          <div className="card-body">
            <h2 className="card-title">Total Customer</h2>
            {customerLoading ? <Loading/> : <p>{customerData?.data.length}</p>}
            
            
          </div>
        </div>
        <br />
        <div className="card  bg-red-500 text-success-content">
          <div className="card-body">
            <h2 className="card-title">Total Due</h2>
            <p>1200 TAKA</p>
            
          </div>
        </div>
        <br />
        <div className="card  bg-orange-500 text-white">
          <div className="card-body">
            <h2 className="card-title">Total Delevered</h2>
            <p>120</p>
            
          </div>
        </div>
        <br />
        <div className="card  bg-rose-400 text-white">
          <div className="card-body">
            <h2 className="card-title">Total Paid</h2>
            <p>0 TAKA</p>
            
          </div>
        </div>
      </div>
    </AdminDashboard>
  );
};

export default Dashboard;
