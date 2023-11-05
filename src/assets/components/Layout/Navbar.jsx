import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";


const Navbar = () => {

    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then( () => {
            // console.log('logged out successful');
            Swal.fire(
                'Logged Out!',
                'You are logged out successfully!',
                'success'
              )
        })
        .catch( error => {
            console.error(error);
        })

    }

    const navlinks =
        <> 
        <li> <NavLink to='/' style={({ isActive }) => ({ 
                color: isActive ? 'white' : '' })}>Home</NavLink></li>
        <li> <NavLink to='/allJobs' style={({ isActive }) => ({ 
                color: isActive ? 'white' : '' })}>All jobs</NavLink></li>
        <li> <NavLink to='/blogs'style={({ isActive }) => ({ 
                color: isActive ? 'white' : '' })}>Blogs</NavLink></li>

        {
            user && <>
            <li> <NavLink to='/appliedJobs' style={({ isActive }) => ({ 
                color: isActive ? 'white' : '' })}>Applied Jobs</NavLink></li>
            <li> <NavLink to='/myJobs' style={({ isActive }) => ({ 
                    color: isActive ? 'white' : '' })}>My Jobs</NavLink></li>
            <li> <NavLink to='/addJobs' style={({ isActive }) => ({ 
                color: isActive ? 'white' : '' })}>Add a Job</NavLink></li></>
        }
        

        </ >

    const details = <>
    {
            user ?
        <>
        <p className=" mr-4 md:block hidden">{user.displayName}</p>
        <img className="rounded-full w-12 mr-4 "  src={user.photoURL} alt="" />
        <button className="btn btn-glass rounded-full" onClick={handleLogOut}>Logout</button>
        </> :
        <> 
        <button className="btn btn-glass rounded-full"> <Link to='/login'>Login</Link></button>
        <button className="btn btn-glass ml-4 rounded-full"> <Link to='/register'>Register</Link></button>
        </>
       
    }</> 
    
    
    
    return (
        <div className="navbar bg-gray-500 ">
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
                <p className="btn btn-ghost normal-case text-xl">JobQuest</p>
            </div>
            <div className="navbar-end">
                {
                    details
                }
            </div>
        </div>
    );
};

export default Navbar;