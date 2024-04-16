import { NavLink } from "react-router-dom";

const Header = () => {
    const links = < >

        <li className="font-bold"><NavLink to="/">Home</NavLink></li>
        <li className="font-bold"><NavLink to="/listedBook">Listed Books</NavLink></li>
        <li className="font-bold"><NavLink to="/PagesToRead">Pages to Read</NavLink></li>
        <li className="font-bold"><NavLink to="/NewBooks">New Books</NavLink></li>
        <li className="font-bold"><NavLink to="/AllView">All View Books</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-lg">
                        {/* <li><a>Item 1</a></li>
                        <li><a>Item 3</a></li> */}
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost font-bold text-3xl"> MyBookshelf</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg">
                    {/* <li><a>Item 1</a></li>
                    <li><a>Item 3</a></li> */}
                    {links}
                </ul>
            </div>
            <div className="navbar-end ">
                <button className="btn mr-4 bg-green-500 text-lg">Sign In</button>
                <button className="btn bg-cyan-400 text-lg">Sign Up</button>
            </div>
        </div>
    );
};

export default Header;
