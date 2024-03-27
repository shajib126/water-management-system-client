import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import StartBusiness from "../pages/StartBusiness";
import RequestBusinessAccount from "../components/RequestBusinessAccount";
import UserSignUp from "../components/UserSignUp";
import Dashboard from "../components/admin/Dashboard";
import CreateProduct from "../components/admin/CreateProduct";
import UserLogin from "../components/user/UserLogin";
import AdminLogin from "../components/admin/AdminLogin";
import Users from "../components/admin/Users";
import Products from "../components/admin/Products";
import Orders from "../components/admin/Orders";
import Product from "../components/Product";
import UserDashboard from "../components/user/UserDashboard";
import UserOrderHistory from "../components/user/UserOrderHistory";
import UserDue from "../components/user/UserDue";
import UserCredit from "../components/user/UserCredit";
import Category from "../components/admin/Category";
import AdditionalPrice from "../components/admin/AdditionalPrice";
import Bottle from "../components/admin/Bottle";

const router = createBrowserRouter([
    {
        path:'',
        element:<App/>
    },
    {
        path:'/start-business',
        element:<StartBusiness/>
    },
    {
        path:'/business-account',
        element:<RequestBusinessAccount/>
    }
    ,
    {
        path:'/user-account',
        element:<UserSignUp/>
    },
    {
        path:'/admin',
        element:<Dashboard/>
    },
    {
        path:'/admin/create-product',
        element:<CreateProduct/>
    },
    {
        path:'/admin/category',
        element:<Category/>
    },
    {
        path:'/admin/login',
        element:<AdminLogin/>
    },
    {
        path:'/admin/customers',
        element:<Users/>
    },
    {
        path:'/login',
        element:<UserLogin/>
    },
    {
        path:'/admin/product',
        element:<Products/>
    },
    {
        path:'/admin/orders',
        element:<Orders/>
    },
    {
        path:'/admin/additional-price',
        element:<AdditionalPrice/>
    },
    {
        path:'/admin/bottle',
        element:<Bottle/>
    },
    {
        path:'/customer/products',
        element:<Product/>
    },
    {
        path:'/customer',
        element:<UserDashboard/>
    },
    {
        path:'/customer/orders',
        element:<UserOrderHistory/>
    },
    {
        path:'/customer/due',
        element:<UserDue/>
    },
    {
        path:'/customer/credit',
        element:<UserCredit/>
    }
])

export default router