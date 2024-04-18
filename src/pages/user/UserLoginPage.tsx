import { Link, useNavigate } from "react-router-dom";
import Logo from '../../assets/logo.jpg'
import {
  useUserLoginMutation,
  useUserProfileQuery,
} from "../../redux/api/baseApi";
import toast, { Toaster } from "react-hot-toast";
import { verifyToken } from "../../utils/verifyToken";
import { useAppDispatch } from "../../redux/hooks";
import { setProfile, setUser } from "../../redux/features/auth/authSlice";
import { useEffect, useState } from "react";
import { JwtPayload } from "jwt-decode";
import { MutationError } from "../../utils/MutationError";

interface CustomeJwtPayload extends JwtPayload {
  role:string
}
const UserLoginPage = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [userLogin] = useUserLoginMutation();
  const dispatch = useAppDispatch();
  const { error, data } = useUserProfileQuery("");



  const navigate = useNavigate();
  useEffect(() => {
    if (error) {
      dispatch(setProfile(null));
    }
    if (data) {
      dispatch(setProfile(data));
    }
  }, [error, data]);



  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const userInfo = {
      phone,
      password,
    };
    try {
      if (phone == "" || password == "") {
        toast.error("both field are required!");
      } else {
        const res = await userLogin(userInfo).unwrap();
        const error = await MutationError(res)
       console.log('error',error);
       
        
        if (error) {
          toast.error(error);
        } else {
          const user = await verifyToken(res.data.accessToken);
          
  
          dispatch(setUser({ user, token: res.data.accessToken }));
          toast.success("Logged In successfully");
          const userWithRole = user as CustomeJwtPayload
          if (user && userWithRole.role) {
            if(userWithRole.role == 'seller'){
              navigate('/seller')
            }else{
              navigate("/customer/products");
            }
            
          }
        }
      }
    } catch (error) {
     const errorData = error as {data:{message:string}}
      toast.error(errorData.data.message);
      
      
    }
   
  };
  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src={Logo}
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Login as User
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            onSubmit={handleLogin}
            className="space-y-6"
            action="#"
            method="POST"
          >
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Phone
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => setPhone(e.target.value)}
                  id="phone"
                  name="phone"
                  type="phone"
                  autoComplete="phone"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Login As admin{" "}
            <Link
              to="/admin/login"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Admin Login
            </Link>
          </p>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default UserLoginPage;
