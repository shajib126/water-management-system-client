
import AdminDashboard from './AdminDashboard'
import ProtectAdmin from '../../utils/ProtectAdmin'
import AdditionalPricePage from '../../pages/admin/AdditionalPricePage'

const AdditionalPrice = () => {
  return (
    <div>
        <ProtectAdmin>
        <AdminDashboard>
            <AdditionalPricePage/>
        </AdminDashboard>
        </ProtectAdmin>
    </div>
  )
}

export default AdditionalPrice