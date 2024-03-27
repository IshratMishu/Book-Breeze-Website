import { useEffect, useState } from "react";
import Offer from "../Offer/Offer";


const Offers = () => {
    const [offers, setOffers] = useState([]);

    useEffect( ()=>{
        fetch('booksData.json')
        .then(res => res.json())
        .then(data => setOffers(data));
    }, [])
    

    return (
        <div className="mt-5 font-workSans">
            <h2 className="text-center bg-[#23BE0A] font-semibold text-white text-lg p-4 rounded-xl shadow-xl">Discover the hottest books that everyone is talking about in our Best Sellers section. From gripping thrillers to heartwarming romance, explore the titles that have captured readers imaginations and earned their place at the top of the charts.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-20">
           { offers.slice(3,6).map((offer,idx)=> <Offer key={idx} offer={offer}></Offer> )
           }
        </div>
        </div>
    );
};

export default Offers;