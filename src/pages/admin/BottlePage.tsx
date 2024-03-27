import { FormEvent, useState } from "react";
import { useCreateBottleMutation, useTotalBottleQuery, useUpdateBottleMutation, useWidthdrawBottleMutation } from "../../redux/api/baseApi";
import Loading from "../Loading";
import { MutationError } from "../../utils/MutationError";
import toast, { Toaster } from "react-hot-toast";

const BottlePage = () => {
  const { isLoading, data } = useTotalBottleQuery("");
  const [createBottle] = useCreateBottleMutation()
  const [updateBottle] = useUpdateBottleMutation()
  const [widthdrawBottle] = useWidthdrawBottleMutation()
  const [editStock,setEditStock] = useState(0)
  const [stock,setStock] = useState(0)
  const [widtdraw,setWidthdraw] = useState(0)

  const handleEntrySubmit = async(e:FormEvent)=>{
    e.preventDefault()
   
    const res = await updateBottle({stock:editStock})
    const err = await MutationError(res)
    if(err){
        toast.error(err)
    }else{
      toast.success('Bottle stock entry')
    }
    
    
  }
  const createBottleHandle = async(e:FormEvent)=>{
    e.preventDefault()
   
    const res = await createBottle({stock})
    const err = await MutationError(res)
    if(err){
        toast.error(err)
    }else{
      toast.success('Bottle stock created')
    }
    
  }

  const widthdrawBottleHandler = async(e:FormEvent)=>{
    e.preventDefault()
   
    const res = await widthdrawBottle({stock:widtdraw})
    const err = await MutationError(res)
    if(err){
        toast.error(err)
    }else{
      toast.success('Bottle widthdrawed')
    }
    
  }
  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="bg-green-400 md:w-[20%] p-4">
          <h1 className="text-2xl text-center">Total Bottle Left</h1>
          {data?.data.map((bottle: any, i: number) => (
            <h1 className="text-2xl font-bold text-center" key={i}>
              {bottle.stock} PCS
            </h1>
          ))}
        </div>
      )}
      {/* widthdraw bottle */}
            
            <div className="bg-slate-400 mb-10 border-2 mt-12 md:w-[40%] mx-auto p-4">
                <form onSubmit={widthdrawBottleHandler} className="text-2xl font-bold mb-4 text-center">
                    <label>Widthdraw Bottle</label>
                    <br />
                    <input onChange={(e)=>setWidthdraw(parseInt(e.target.value))} type="number" />
                    <br />
                    <button type="submit" className="btn btn-success mt-4 ">Widthdraw</button>
                </form>
            </div>

      {/* create and entry bottle */}
      {data?.data?.length < 1 ? (
        <div className="border-2 mt-12 md:w-[40%] mx-auto p-4">
          <form onSubmit={createBottleHandle} className="text-2xl font-bold mb-4 text-center">
            <label className="text-2xl font-bold mb-4 text-center" htmlFor="">
              Create Bottle
            </label>
            <br />
            <input onChange={(e)=>setStock(parseInt(e.target.value))} type="number" />
            <br />
            <button type="submit" className="btn btn-success mt-4 ">Entry</button>
          </form>
        </div>
      ) : (
        <div className="border-2 mt-12 md:w-[40%] mx-auto p-4">
          <form onSubmit={handleEntrySubmit} className="block">
            <label className="text-2xl font-bold mb-4 text-center" htmlFor="">
              Entry Bottle
            </label>
            <br />
            <input onChange={(e)=>setEditStock(parseInt(e.target.value))} className="border-2 p-2 " type="number" />
            <br />
            <button type="submit" className="btn btn-success mt-4 ">Entry</button>
          </form>
        </div>
      )}
    <Toaster/>
    </div>
  );
};

export default BottlePage;
