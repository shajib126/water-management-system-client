
import { useProductsAdminQuery } from '../../redux/api/baseApi';
import Loading from '../Loading';


const ProductsPage = () => {
    const {isLoading,data} = useProductsAdminQuery('')
    
    
  return (
    <div>
      <div className="overflow-x-auto">
        {isLoading ? <Loading/> : <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Product Name</th>
        <th>Initial Price</th>
        <th>Category</th>
        <th>Product size</th>
      </tr>
    </thead>
    <tbody>
      {data?.data.map((product:any,i:number)=>(
        <tr key={i}>
          <th>{i+1}</th>
          <th>{product?.productName}</th>
          <th>{product?.initialPrice}</th>
          <th>{product?.productCategory?.category}</th>
          <th>{product?.productSize}{product?.sizeType}</th>
        </tr>
      ))}
      
    </tbody>
  </table>}
  
</div>
    </div>
  )
}

export default ProductsPage