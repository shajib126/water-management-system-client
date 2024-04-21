import { FormEvent, useState } from "react";
import { useEditProductMutation, useProductsAdminQuery } from "../../redux/api/baseApi";
import Loading from "../Loading";
import { FaRegEdit } from "react-icons/fa";
import { MutationError } from "../../utils/MutationError";
import toast, { Toaster } from "react-hot-toast";

const ProductsPage = () => {
  const { isLoading, data } = useProductsAdminQuery("");
  const [editProdct] = useEditProductMutation()
  const [edit, setEdit] = useState(null);
  const [productName, setProductName] = useState("");
  const [initialPrice, setInitialPrice] = useState<number | undefined>(0);
  // const [image, setImage] = useState("");
  const [field,setField] = useState('')

  // const imageChange = (e: any) => {
  //   const file = e.target.files[0];
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     if (typeof reader.result === "string") {
  //       setImage(reader.result);
  //     }
  //   };
  //   if (file) {
  //     reader.readAsDataURL(file);
  //   }
  // };

const editSubmit = async(e:FormEvent)=>{
  e.preventDefault()
  const product:any = {}
  if(field == 'all'){
    product.productName = productName
    product.initialPrice = initialPrice
    // product.image = image
  }
  if(field == 'name'){
    product.productName = productName
    
  }
  if(field == 'price'){
    product.initialPrice = initialPrice
    
  }
 
  
  const res = await editProdct({product,productId:edit});
  const err = await MutationError(res)
  if(err){
    toast.error(err)
  }else{
    toast.success('Product udpated successfully')
    setEdit(null)
  }
  
} 

  return (
    <div>
      <div className="overflow-x-auto">
        {isLoading ? (
          <Loading />
        ) : (
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Image</th>
                <th>Product Name</th>
                <th>Initial Price</th>

                <th>Edit Product</th>
              </tr>
            </thead>
            <tbody>
              {data?.data.map((product: any, i: number) => (
                <tr key={i}>
                  <th>{i + 1}</th>
                  <th>
                    {product.image ? (
                      <img
                        className="w-[50px]"
                        src={product?.image?.url}
                        alt=""
                      />
                    ) : (
                      ""
                    )}
                  </th>
                  <th>{product?.productName}</th>
                  <th>{product?.initialPrice}</th>

                  <th>
                    <FaRegEdit onClick={() => setEdit(product?._id)} />
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      {
        edit && <div className="md:w-[50%] bg-slate-300 p-8 rounded-md shadow-md absolute md:top-[30%] top-[50%] md:left-[25%] w-[90%] left-[5%] ">
        <h1>Edit Product</h1>
        <select className="w-full p-2 rounded-md" onChange={(e)=>setField(e.target.value)}>
          <option>Select Field</option>
          <option value="name">Name</option>
          <option value="price">Price</option>
          <option value="all">All</option>
        </select>
        <form onSubmit={editSubmit}>
          {field == 'name' ?<div>
            <label>Product Name</label>
      
            <input onChange={(e)=>setProductName(e.target.value)
            } className="w-full border-2 p-2 border-black" type="text" placeholder="" />
          </div> : field == 'price' ? <div>
            <label>Product Price</label>
            <input className="border-2 p-2 border-black w-full" type="number" placeholder="" onChange={(e)=>setInitialPrice(parseInt(e.target.value))} />
          </div> : field == 'all' ? <div>
          <div>
            <label>Product Name</label>
      
            <input onChange={(e)=>setProductName(e.target.value)
            } className="w-full border-2 p-2 border-black" type="text" placeholder="" />
          </div>
          <div>
            <label>Product Price</label>
            <input className="border-2 p-2 border-black w-full" type="number" placeholder="" onChange={(e)=>setInitialPrice(parseInt(e.target.value))} />
          </div>
          {/* <div>
          <label>Product Image</label>
          <br />
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={imageChange}
            className="file-input file-input-bordered file-input-primary w-full max-w-xs"
          />
          </div> */}
          </div> :'' }
          
          
          <div className="flex gap-3 mt-4">
            <button type="submit" className="btn btn-success">Save Change</button>
            <button className="btn btn-error" onClick={()=>setEdit(null)}>Close</button>
          </div>
        </form>
      </div>
      }
      <Toaster/>
    </div>
  );
};

export default ProductsPage;
