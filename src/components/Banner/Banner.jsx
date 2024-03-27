import { NavLink } from "react-router-dom";


const Banner = () => {
    return (
        <div className="hero h-[520px] md:h-[600px] bg-base-200 font-workSans p-2 md:p-10 rounded-xl">
            <div className="hero-content text-center md:text-start flex-col md:flex-row-reverse">
                <img src="https://i.ibb.co/rbsH0sR/the-bike.png" className="md:w-auto w-60"/>
                <div className="md:p-15 p-4">
                    <h1 className="md:text-5xl text-2xl font-bold">Refreshing Your Bookshelf with New Reads</h1>
                    <NavLink to='/listed'><button className="btn bg-[#23BE0A] text-white font-medium md:font-bold text-lg md:mt-4 mt-2">View The List</button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default Banner;