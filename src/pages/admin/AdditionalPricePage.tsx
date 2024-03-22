import { FormEvent, useState } from "react";
import {
  useAdditionalPriceQuery,
  useCreateAdditionalPriceMutation,
} from "../../redux/api/baseApi";
import { MutationError } from "../../utils/MutationError";
import toast, { Toaster } from "react-hot-toast";
import Loading from "../Loading";

const AdditionalPricePage = () => {
  const [userType, setUserType] = useState("");
  const [price, setPrice] = useState<number | undefined>(0);
  const [showRegular,setShowRegular] = useState(false)
  const [showSpecial,setShowSpecial] = useState(false)
  const [showSuper,setShowSuper] = useState(false)
  const [createAdditinalPrice] = useCreateAdditionalPriceMutation();
  const { isLoading, data } = useAdditionalPriceQuery("");
 console.log(data);
 

  const createAdditionalPrice = async (e: FormEvent) => {
    e.preventDefault();
    const additional = {
      userType,
      price,
    };
    const res = await createAdditinalPrice(additional);
    const err = await MutationError(res);
    if (!err) {
      toast.success("Additional price added");
    }
  };

  const updateAdditionalPrice = async(data:any)=>{
    console.log(data);
    
  }
  return (
    <div>
      <h1>Additional Price</h1>
      {isLoading ? (
        <Loading />
      ) : data?.data.length == 0 ? (
        <form onSubmit={createAdditionalPrice}>
          <div className="mt-4 inline-block">
            <select
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              className="select select-bordered w-full max-w-xs mb-9"
            >
              <option>Select User Type</option>
              <option value="regular">Regular</option>
              <option value="special">Special</option>
              <option value="superUser">Super</option>
            </select>
            <br />
            <div className="inline-block mb-8 mr-4">
              <label>Price</label>
              <input
                onChange={(e) => setPrice(parseInt(e.target.value))}
                type="number"
                className="input input-bordered input-secondary w-full max-w-xs"
              />
            </div>

            <button className="btn btn-info">Add</button>
          </div>
        </form>
      ) : (
        <div>
          <h1 className="text-2xl mb-4 font-bold">Update Additional Price</h1>
          {data?.data.map((price: any, i: number) => (
            <div key={i} className="border-2 md:w-[50%] p-2">
              <div  className="mb-4 flex justify-between bg-success text-white p-2">
                <h1>Regular</h1>
                {showRegular == true ? <input type="number" /> : <h1 onClick={()=>setShowRegular(true)}>{price.regular} Taka</h1>}
                
                <button onClick={()=>setShowRegular(false)}>Change</button>
              </div>
              <div className="mb-4 flex justify-between bg-rose-400 text-white p-2">
                <h1>Special</h1>
                {showSpecial == true ? <input type="number" /> :<h1 onClick={()=>setShowSpecial(true)}>{price.special} Taka</h1>}
                
                <button onClick={()=>setShowSpecial(false)}>Edit</button>
              </div>
              <div className="mb-4 flex justify-between bg-green-500 text-white p-2">
                <h1>Super</h1>
                {showSuper == true ? <input type="number" /> : <h1 onClick={()=>setShowSuper(true)}>{price.superUser} Taka</h1> }
                
                <button onClick={()=>updateAdditionalPrice({userType:'superUser'})}>Edit</button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div>{isLoading ? <Loading /> : <div></div>}</div>
      <Toaster />
    </div>
  );
};

export default AdditionalPricePage;
