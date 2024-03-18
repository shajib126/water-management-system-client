import React from 'react'
import AdminDashboard from './AdminDashboard'
import OrdersPage from '../../pages/admin/OrdersPage'

const Orders = () => {
  return (
    <AdminDashboard>
        <OrdersPage/>
    </AdminDashboard>
  )
}

export default Orders