import { NavLink } from "react-router-dom";

const Header = () => {

    const links = <>
        <li><NavLink to='/' className={({ isActive}) => isActive ? 'text-[#23BE0A] border-2 border-[#23BE0A]' : 'text-gray-500'}>Home</NavLink></li>
        <li><NavLink to='/listed' className={({ isActive }) => isActive ? 'text-[#23BE0A] border-2 border-[#23BE0A]' : 'text-gray-500'}>Listed Books</NavLink></li>
        <li><NavLink to='/read' className={({ isActive }) => isActive ? 'text-[#23BE0A] border-2 border-[#23BE0A]' : 'text-gray-500'}>Pages to Read</NavLink></li>
        <li><NavLink to='/bestseller' className={({ isActive }) => isActive ? 'text-[#23BE0A] border-2 border-[#23BE0A]' : 'text-gray-500'}>Offers</NavLink></li>
        <li><NavLink to='/offers' className={({ isActive }) => isActive ? 'text-[#23BE0A] border-2 border-[#23BE0A]' : 'text-gray-500'}>Best Seller</NavLink></li>
        <li><NavLink to='/box' className={({ isActive }) => isActive ? 'text-[#23BE0A] border-2 border-[#23BE0A]' : 'text-gray-500'}>Mystery Box</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100 font-workSans">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-semibold">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-3xl font-bold gap-0">Book<span className="text-[#23BE0A]">Breeze</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-2 hidden md:flex">
                <a className="btn bg-[#23BE0A] text-white">Sign In</a>
                <a className="btn bg-info text-white">Sign Up</a>
            </div>
        </div>
    );
};

export default Header;