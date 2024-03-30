import { Link } from "react-router-dom"

const sellerMenu = [
    {
        path:'/seller',
        name:'Home'
    },
    {
        path:'/seller/order',
        name:'Orders'
    },
    {
        path:'/seller/bottle',
        name:'Bottles'
    },
    {
        path:'/seller/customers',
        name:'Customers'
    }
]
const SellerMenu = () => {
  return (
   <ul className="bg-lime-400 p-4 flex gap-4 w-[90%] mx-auto">
    {
        sellerMenu.map((menu)=>(
            <Link className="border-2 p-2 rounded-md font-bold" to={menu.path}>
                <li>{menu.name}</li>
            </Link>
        ))
    }
   </ul>
  )
}

export default SellerMenu