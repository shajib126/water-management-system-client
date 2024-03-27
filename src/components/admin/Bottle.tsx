import ProtectAdmin from '../../utils/ProtectAdmin'
import BottlePage from '../../pages/admin/BottlePage'
import AdminDashboard from './AdminDashboard'

const Bottle = () => {
  return (
    <ProtectAdmin>
        <AdminDashboard>
            <BottlePage/>
        </AdminDashboard>
    </ProtectAdmin>
  )
}

export default Bottle