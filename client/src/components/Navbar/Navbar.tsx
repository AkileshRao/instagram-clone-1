import { Link, NavLink, Outlet } from 'react-router-dom'
import { GrHomeRounded, GrLogout } from "react-icons/gr";
import { AiOutlineCompass } from "react-icons/ai";

function Navbar() {
  return (
    <>
    <nav className='h-16 flex items-center border-b-4 px-64 navbar bg-black'>
        <div className='flex w-full'>
            <div className='grow'>
                <img src={'/assets/images/logo1.png'} alt="Instagram" className="logo"/>
            </div>
            
            <div className='flex items-center flex-row gap-4'>
                <Link to="dashboard"><GrHomeRounded className='navbar_icons' /></Link>
                <Link to="explore"><AiOutlineCompass className='navbar_icons'/></Link>
            </div>
        </div>
    </nav>
    <Outlet />  
    </>
  )
}

export default Navbar
