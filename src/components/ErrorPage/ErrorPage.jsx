import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="font-workSans text-center border-2 border-[#23BE0A] shadow-xl p-5 m-10 md:p-20 md:m-20">
            <h2 className="font-bold text-3xl">Oops! Not Found☹️</h2>
            <Link to='/'><button className="btn bg-[#23BE0A] text-white font-bold text-lg mt-5">Go Back to Home</button></Link>
        </div>
    );
};

export default ErrorPage;