import { NavLink } from "react-router-dom";


const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/N6RsRSR/pngwing-1.png" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Refreshing Your Bookshelf with New Reads</h1>
                    <NavLink to='/listed'><button className="btn btn-primary">View The List</button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default Banner;