import { Link } from 'react-router-dom'

const GetinStarted = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Water management System</h1>
      <p className="py-6">Manage your customer or order your product</p>
      <Link to='/start-business'>
      <button className="btn btn-primary">Get Started</button>
      </Link>
      
    </div>
  </div>
</div>
  )
}

export default GetinStarted