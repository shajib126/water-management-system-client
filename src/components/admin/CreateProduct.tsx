import AdminDashboard from './AdminDashboard'
import CreateProductPage from '../../pages/admin/CreateProductPage'

const CreateProduct = () => {
  return (
    <AdminDashboard>
        <h1 className='text-2xl font-bold text-center'>Create Product</h1>
        <CreateProductPage/>
    </AdminDashboard>
  )
}

export default CreateProduct