import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const StartBusiness = () => {
  return (
    <div>
      <Navbar />
      <div className="w-[80%] border-none  md:border-dashed rounded-md border-4 md:p-20 mx-auto md:flex md:justify-between mt-[10%] ">
        <div className=" md:w-[40%] w-[100%] bg-red-400 p-10 rounded-md shadow-md">
          <h1 className="text-2xl font-bold">Business</h1>
          <br />
          <p>Create account, to manage your business</p>
          <br />
          <Link to='/business-account'>
          <button className="bg-lime-700 text-white p-2 rounded-md">
            Create account
          </button>
          </Link>
          
        </div>
        <div className="md:w-[40%] md:mt-0 mt-6 w-[100%]  bg-green-300 p-10 rounded-md shadow-md">
          <h1 className="text-2xl font-bold">User</h1>
          <br />
          <p>Create account, to order your product</p>
          <br />
          <Link to='/user-account'>
          <button className="bg-lime-500 text-white p-2 rounded-md">
            Create account
          </button>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default StartBusiness;
