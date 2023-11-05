import { Link } from "react-router-dom";


const ErrorRoute = () => {
    return (
        <div className="flex flex-col justify-center">
            <Link to="/" className="text-center">Back to Home</Link>
            <img className="w-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNRbF2c1k9SnwBoDcwhVREGcK9xWuSUCamRQ&usqp=CAU" alt="" />
            
        </div>
    );
};

export default ErrorRoute;