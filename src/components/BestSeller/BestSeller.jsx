
const BestSeller = () => {
    return (
        <div className="mt-5 font-workSans">
            <div className="flex gap-2 justify-center items-center p-2">
                <h2 className="text-xl font-semibold">To know the terms and conditions of the offers</h2>
                <button className="btn bg-[#23BE0A] text-white font-medium">Click Here</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-10">
                <div className="card w-80 bg-base-100 shadow-xl image-full ">
                    <figure><img className="" src="https://i.ibb.co/xXW6RXW/e1a5e277eb349b1003e129a8da3a9f89.jpg" alt="Shoes" /></figure>
                    <div className="card-body items-center text-center mt-20">
                        <h2 className="card-title text-4xl font-semibold">Save UpTo 8%</h2>
                        <p className="text-xl font-medium">Get a Free BookMark in Every Order</p>
                        <button className="btn bg-[#23BE0A] text-white font-medium">Order Now</button>
                    </div>
                </div>
                <div className="card w-80 bg-base-100 shadow-xl image-full">
                    <figure><img className="" src="https://i.ibb.co/cF2Tpq9/2cde22ae53c1eaff2eec9d510c03e0cc.jpg" alt="Shoes" /></figure>
                    <div className="card-body items-center text-center mt-20">
                        <h2 className="card-title text-3xl font-semibold">Delivery Charge Free</h2>
                        <p className="text-xl font-medium">Buy 3 Books & Get Free Delivery</p>
                        <button className="btn bg-[#23BE0A] text-white font-medium">Order Now</button>
                    </div>
                </div>
                <div className="card w-80 bg-base-100 shadow-xl image-full">
                    <figure><img className="" src="https://i.ibb.co/6PLx28c/fd3447d7e773975a5920e3368da7c831.jpg" alt="Shoes" /></figure>
                    <div className="card-body items-center text-center mt-20">
                        <h2 className="card-title text-4xl font-semibold">Get Mystery Box</h2>
                        <p className="text-xl font-medium">Buy Books Upto 1000Taka & Get a Mystery Box</p>
                        <button className="btn bg-[#23BE0A] text-white font-medium">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestSeller;

