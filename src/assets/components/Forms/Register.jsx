import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {

    const { createUser,locationState } = useContext(AuthContext); 
    console.log("location in register page ", locationState );
    const navigate = useNavigate();


    const handleRegister = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const photoURL = form.get('photoURL');
        const password = form.get('password');

    
        const passwordRegex =  /^(?=.*[A-Z])(?=.*[\W_]).{6,}$/;

        if (!passwordRegex.test(password)) {
            return Swal.warning("Password must be at least 6 characters long, contain a capital letter and a special character.");
        }

        createUser(name,email, photoURL,password)
        .then(result => {
            console.log(result.user)
            navigate(locationState? locationState : '/')
            // return (toast.success("Registered with Google!"));
        })
        .catch(error => {
            console.error(error);
            if (error.code === "auth/email-already-in-use") {
                // toast.error("Email is already in use!");
              } 
        
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero py-56" style={{
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1614029951470-ef9eb9952be7?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'}}>
                <div className="hero-content  flex-col lg:flex-row rounded-full">
                    <div className="text-white text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register to Experience More!</h1>
                        <p className="py-6">Create Your Account and Join Our Community</p>
                    </div>
                    <div className="card flex-shrink-0 w-5/6 lg:px-32 bg-base-100 rounded-full">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered rounded-full" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered rounded-full" required />
                            </div>

                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text" name="photoURL" placeholder="Photo" className="input input-bordered rounded-full" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Password" className="input input-bordered rounded-full" required />
                            </div>

                            <div className="form-control mt-6">
                            <button className="btn btn-glass rounded-full">Register</button>
                            <p className="mt-4 text-center">Registered already? Then go to <span className="font-bold"><Link to="/Login">Login</Link></span></p>
                            </div>
                        </form>
                    </div>
                </div>    
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Register;