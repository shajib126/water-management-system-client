import Logo from '../../assets/logo.jpg'

const SellerNav = () => {
  return (
    <nav className='p-2 flex justify-between w-[90%] mx-auto'>
        <div>
        <img className='w-[100px]' src={Logo} alt="" />
        <h1>Pani Hishab</h1>
        </div>
        <button>Logout</button>
    </nav>
  )
}

export default SellerNav