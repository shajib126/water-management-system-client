import { FormEvent, useState } from "react";
import {
  useAdditionalPriceQuery,
  useCreateAdditionalPriceMutation,
  useUpdateAdditionalPriceMutation,
} from "../../redux/api/baseApi";
import { MutationError } from "../../utils/MutationError";
import toast, { Toaster } from "react-hot-toast";
import Loading from "../Loading";

const AdditionalPricePage = () => {
 
 const [regular,setReqular] = useState(0)
 const [special,setSpecial] = useState(0)
 const [superUser,setSuperUser] = useState(0)
  const [showRegular,setShowRegular] = useState(false)
  const [showSpecial,setShowSpecial] = useState(false)
  const [showSuper,setShowSuper] = useState(false)
  const [createAdditinalPrice] = useCreateAdditionalPriceMutation();
  const [updateAdditionalPrice] = useUpdateAdditionalPriceMutation()
  const { isLoading, data } = useAdditionalPriceQuery("");
 const [editRegular,setEditRegular] = useState(0)
 const [editSpecial,setEditSpecial] = useState(0)
 const [editSuper,setEditSuper] = useState(0)
 

  const createAdditionalPrice = async (e: FormEvent) => {
    e.preventDefault();
    const additional = {
      regular,
      special,
      superUser
    };
    const res = await createAdditinalPrice(additional);
    const err = await MutationError(res);
    if (!err) {
      toast.success("Additional price added");
    }
  };

  const updateAdditionalPriceHandle = async(data:any)=>{
    const additionalInfo:any = {}
    if(data.userType == 'regular'){
      additionalInfo.regular = editRegular
    }
    if(data.userType == 'special'){
      additionalInfo.special = editSpecial
    }
    if(data.userType == 'superUser'){
      additionalInfo.superUser = editSuper
    }
    const res = await updateAdditionalPrice(additionalInfo)
    const err = await MutationError(res)
    if(err){
      toast.error(err)
    }else{
      toast.success('additonal price updated')
    }
    
  }
  return (
    <div>
      <h1>Additional Price</h1>
      {isLoading ? (
        <Loading />
      ) : data?.data.length == 0 ? (
        <form onSubmit={createAdditionalPrice}>
          <div className="mt-4 inline-block">
            <div className="">
            <label>Regular</label>
            <br />
            <input onChange={(e)=>setReqular(parseInt(e.target.value))} required className="p-2 border-2 rounded-md w-full" type="number" />
            </div>
            <div>
            <label>Special</label>
            <br />
            <input onChange={(e)=>setSpecial(parseInt(e.target.value))} required className="p-2 border-2 rounded-md w-full" type="number" />
            </div>
            <div>
            <label>Super</label>
            <br />
            <input onChange={(e)=>setSuperUser(parseInt(e.target.value))} required className="p-2 border-2 rounded-md w-full" type="number" />
            </div>
            <br />

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
                {showRegular == true ? <input className="text-black" onChange={(e)=>setEditRegular(parseInt(e.target.value))} type="number" /> : <h1 onClick={()=>setShowRegular(true)}>{price.regular} Taka</h1>}
                
                <button onClick={()=>updateAdditionalPriceHandle({userType:'regular'})}>Change</button>
              </div>
              <div className="mb-4 flex justify-between bg-rose-400 text-white p-2">
                <h1>Special</h1>
                {showSpecial == true ? <input className="text-black" onChange={(e)=>setEditSpecial(parseInt(e.target.value))} type="number" /> :<h1 onClick={()=>setShowSpecial(true)}>{price.special} Taka</h1>}
                
                <button onClick={()=>updateAdditionalPriceHandle({userType:'special'})}>Change</button>
              </div>
              <div className="mb-4 flex justify-between bg-green-500 text-white p-2">
                <h1>Super</h1>
                {showSuper == true ? <input className="text-black" onChange={(e)=>setEditSuper(parseInt(e.target.value))} type="number" /> : <h1 onClick={()=>setShowSuper(true)}>{price.superUser} Taka</h1> }
                
                <button onClick={()=>updateAdditionalPriceHandle({userType:'superUser'})}>Change</button>
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
