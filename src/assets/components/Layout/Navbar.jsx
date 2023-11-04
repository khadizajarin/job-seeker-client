import { Link } from "react-router-dom";


const Navbar = () => {

    const navlinks =
        <> 
        <li> <Link to='/'>Home</Link></li>
        <li> <Link to='/allJobs'>All jobs</Link></li>
        <li> <Link to='/appliedJobs'>Applied Jobs</Link></li>
        <li> <Link to='/appliedJobs'>My Jobs Jobs</Link></li>
        <li> <Link to='/appliedJobs'>Add a Job</Link></li>
        <li> <Link to='/appliedJobs'>Blogs</Link></li>


        {/* Add A Job, My Jobs(Jobs that a user has created through Add A
Job page), Blogs, and User Profile. */}
        </ >

    const details = <>
        <button className="btn btn-glass"> Login</button>
        <div className="w-10 rounded-full">
          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
    </>
    
    return (
        <div className="navbar bg-base-100">
                  <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navlinks
                        }
                    </ul>

                </div>
                <div className="navbar-start hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    {
                        navlinks
                    }
                    </ul>
                </div>
            
            <div className="navbar-center">
                <img className="w-8 rounded-full" src="https://media.istockphoto.com/id/1402623660/photo/glass-lowercase-letter-e.jpg?s=2048x2048&w=is&k=20&c=fR_rnKVqJBv3pkHJgfDBtQJSB9oyl7PzWMfe8fL_BAE=" alt="" />
                <a className="btn btn-ghost normal-case text-xl">JobQuest</a>
            </div>
            <div className="navbar-end">
                {/* <button className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                    <span className="badge badge-xs badge-primary indicator-item"></span>
                    </div>
                </button> */}
                {
                    details
                }
            </div>
        </div>
    );
};

export default Navbar;