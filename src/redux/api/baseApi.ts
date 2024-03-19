import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
// const baseQuery = fetchBaseQuery({baseUrl:'http://localhost:5000/api/v1'})
export const baseApi = createApi({
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:5000/api/v1',credentials:'include',prepareHeaders:(headers,{getState})=>{
      const token = (getState() as RootState).auth.token
       
       
       if(token){
        headers.set('authorization',`${token}`)
       }
       return headers
    }}),
    endpoints:(build)=>({
        userLogin:build.mutation({
            query:(userInfo)=>({
                url:'/user/login',
                method:'POST',
                body:userInfo
            })
        }),
        userProfile:build.query({
            query:()=>({
                url:'/user/profile',
                method:'GET'
            })
        }),
        adminProfile:build.query({
            query:()=>({
                url:'/admin/profile',
                method:'GET'
            })
        }),
        requestAdminAccount:build.mutation({
            query:(adminInfo)=>({
                url:'/admin/create',
                method:'POST',
                body:adminInfo
            })
        }),
       
        adminLogin:build.mutation({
            query:(adminInfo)=>({
                url:'/admin/login',
                method:'POST',
                body:adminInfo
            })
        }),
        customerRegistration:build.mutation({
            query:(customerInfo)=>({
                url:'/user/create',
                method:'POST',
                body:customerInfo
            })
        }),
        customerLogin:build.mutation({
            query:(customerInfo)=>({
                url:'/user/login',
                method:'POST',
                body:customerInfo
            })
        }),
        customers:build.query({
            query:()=>({
                url:'/user',
                method:'GET'
            })
        }),
        customerOrders:build.query({
            query:()=>({
                url:`/order/customer-order`,
                method:'GET'
            })
        }),
        customerDue:build.query({
            query:()=>({
                url:'/order/customer-due',
                method:'GET'
            })
        }),
        adminStoreId:build.query({
            query:()=>({
                url:'/admin/approved',
                method:"GET"
            })
        }),
        categories:build.query({
            query:()=>({
                url:'/category',
                method:'GET'
            })
        }),
        createCategory:build.mutation({
            query:(categoryInfo)=>({
                url:'/category/create',
                method:'POST',
                body:categoryInfo
            })
        }),
        createProduct:build.mutation({
            query:(product)=>({
                url:'/product/create',
                method:'POST',
                body:product
            })
        }),
        productsAdmin:build.query({
            query:()=>({
                url:'/product/admin',
                method:'GET'
            })
        }),
        createOrder:build.mutation({
            query:(orderInfo)=>({
                url:'/order/create-order',
                method:'POST',
                body:orderInfo
            })
        }),
        allOrders:build.query({
            query:(query)=>({
                
                
                url:`/order?${query}`,
                method:'GET'
            })
        })
    })
})

export const {useAdminProfileQuery,useCreateCategoryMutation,useUserProfileQuery,useCustomerDueQuery,useCustomerOrdersQuery,useUserLoginMutation,useAllOrdersQuery,useProductsAdminQuery,useCreateProductMutation,useCategoriesQuery,useRequestAdminAccountMutation,useAdminLoginMutation,useCustomersQuery} = baseApi