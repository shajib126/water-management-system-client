import { baseApi } from "../api/baseApi";
export type AdminAccount = {
    firstName:string;
    lastName:string;
    email:string;
    address:string;
    phone:string;
    password:string;
}

// const adminAccountApi = baseApi.injectEndpoints({
//     endpoints:(builder)=>({
//         registerAdmin:builder.mutation<AdminAccount,Partial<AdminAccount>>({
//             query:(adminInfo)=>({
//                 url:'/admin/create',
//                 method:'POST',
//                 body:adminInfo
//             })
//         })
//     })
// })


// export const {useRegisterAdminMutation} = adminAccountApi