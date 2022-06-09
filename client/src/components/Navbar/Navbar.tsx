import { Link, NavLink, Outlet } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <nav className='h-11 flex items-center border-b-4 border-t-4 px-64'>
        <div className='flex w-full'>
            <div className='grow'>
                Brand
            </div>
            <div className='flex gap-4'>
                <Link to="dashboard">Dashboard</Link>
                <Link to="explore">Explore</Link>
            </div>
        </div>
    </nav>
    <Outlet />  
    </>
  )
}

export default Navbar