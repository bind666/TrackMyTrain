import { Link, NavLink } from 'react-router-dom'
import { MdLogout } from "react-icons/md";
import { TbTrain } from "react-icons/tb";
import { useAuth } from '@clerk/clerk-react';

export default function Header() {
    const { signOut } = useAuth();
    const signedOut = () => {
        signOut();
    }

    return (
        <header className="sticky z-50 top-0 shadow-sm">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <h1 className="text-3xl font-bold text-black items-center flex flex-col ">
                        <p>Track<span className="text-green-500">MY</span>Train</p>
                        <TbTrain size={50} />
                    </h1>

                    <div className="flex items-center lg:order-2 gap-5">
                        <Link
                            to="#"
                        >
                            <button onClick={signedOut} className='flex'><MdLogout size={25} />Logout</button>
                        </Link>

                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200
                                     ${isActive ? " text-green-600" : "text-gray-600"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200
                                     ${isActive ? " text-green-600" : "text-gray-600"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    About Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/services"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200
                                     ${isActive ? " text-green-600" : "text-gray-600"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Services
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

