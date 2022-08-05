import { Link, NavLink, Outlet } from 'react-router-dom'
import { GrHomeRounded, GrLogout } from "react-icons/gr";
import { AiOutlineCompass } from "react-icons/ai";

function Navbar() {
  return (
    <>
    <nav className='h-16 flex items-center border-b-4 navbar bg-black '>
        <div className='flex w-full justify-center'>
            <div className=''>
                {/* <img src={'/assets/images/logo1.png'} alt="InstaHub" className="logo"/> */}
            </div>
            <div>
              <input type="text" name="search" />
            </div>
            <div className='flex items-center flex-row gap-4 text-white	'>
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
