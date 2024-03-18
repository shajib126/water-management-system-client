import React from 'react'
import ProductsPage from '../../pages/admin/ProductsPage'
import AdminDashboard from './AdminDashboard'

const Products = () => {
  return (
    <div>
        <AdminDashboard>
        <ProductsPage/>
        </AdminDashboard>
        
    </div>
  )
}

export default Products