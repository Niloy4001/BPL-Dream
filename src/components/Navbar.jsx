import logo from '../assets/logo.png'
import { ImMenu3 } from "react-icons/im";
import coin from '../assets/coin.png'

const Navbar = () => {
    return (
        <div className="w-full">
            <div className="w-[90%] mx-auto py-5 md:py-10">
                <div className="navbar bg-base-100 flex justify-between items-center">
                    <div className="">
                        <img src={logo} alt="Cricketer" className='w-[73] h-[72px]'/>
                    </div>
                    <div className=" gap-2">
                        <div className="hidden lg:flex gap-4 text-dark/[0.7] font-normal text-base">
                            <p className='cursor-pointer'>Home</p>
                            <p className='cursor-pointer'>Fixture</p>
                            <p className='cursor-pointer'>Teams</p>
                            <p className='cursor-pointer'>Schedules</p>
                        </div>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar flex justify-center lg:hidden">
                                <div className="w-10 rounded-full">
                                <div className='flex  h-full text-xl justify-center items-center'>
                                <p><ImMenu3 /></p>
                                </div>
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 p-2 shadow w-full flex justify-center">
                                <li><a>Home</a></li>
                                <li><a>Fixture</a></li>
                                <li><a>Teams</a></li>
                                <li><a>Schedules</a></li>
                            </ul>
                        </div>
                    </div>
                    <div>                           
                        <button className='flex justify-center items-center gap-4 px-5 py-4 border border-solid border-[#1313131A]/[0.1] rounded-xl text-dark text-base font-semibold'>
                            <span>0 Coin</span>
                            <span><img src={coin} alt="" /> </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;