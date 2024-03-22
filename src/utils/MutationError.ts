import toast from "react-hot-toast";

export const MutationError = async(res:any)=>{
    if('error' in res){
        const errorData = res.error as { data: { message: string } };
        if(errorData && errorData.data){
         return toast.error(errorData.data.message);
          
        }else{
          return console.log('Unexpected error', res.error);
          
        }
        
      }
}