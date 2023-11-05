import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from "../Layout/Footer";
import Navbar from "../Layout/Navbar";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from 'sweetalert2'


const Login = () => {
    const { signIn, createUserGoogle, locationState, setLocationState } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const goToRegister = () => {
        setLocationState(location.state);
        navigate('/register');
        console.log(location.state);
    }



    const handleLogInWithGoogle = e => {
        e.preventDefault();
    
        createUserGoogle ()
        .then(result => {
            navigate(location?.state? location.state : '/');
            console.log("Logging in with Google is successful!", result.user);
        })
        .catch (error => {
            console.error(error);
        })
    }

    const handleLogIn = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget)  ;
        
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);


        signIn(email, password)
        .then(result => {
            console.log(result.user)
            navigate(locationState? locationState : '/')
            // return (toast.success("Registered with Google!"));
        })
        .catch(error => {
            console.error("Firebase Error: ", error.code);
            console.error("Firebase Error Message: ", error.message);
            Swal.fire({
                title: 'Error!',
                text: 'Invalid email or password!',
                icon: 'error',
                confirmButtonText: 'ok!'
              })
        })
    }


    return (
        <div>
            <Navbar></Navbar>
                <div className="hero py-56 " style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url("https://media.istockphoto.com/id/1455562255/photo/encryption-your-data-unique-digital-lock-big-data-security-safe-your-data-cyber-internet.jpg?s=2048x2048&w=is&k=20&c=7lD38pmm_d5lage9khjdF-sVzeGq4nDmpRh0UPfb-ok=")'}}>
                <div className="hero-content  flex-col lg:flex-row">
                    <div className="text-white text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now! </h1>
                        <p className="py-6">Welcome Back! Please Log In to Your Account</p>
                    </div>
                    <div className="card  w-full lg:p-16 bg-base-100 rounded-full">
                        <form  onSubmit={handleLogIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered rounded-full" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Password" className="input input-bordered rounded-full" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-glass rounded-full">Login</button>
                            </div>
                        </form>
                        <p className="text-center">Or,</p>
                        <button onClick={handleLogInWithGoogle} className="btn btn-glass mt-2 rounded-full">Login with Google!</button>
                        <p className="mt-4 text-center">New here? Please proceed to <span className="font-bold"><Link to="/register" onClick={goToRegister}>Register</Link></span></p>
                    </div>
                </div>    
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;