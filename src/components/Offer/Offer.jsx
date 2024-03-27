import PropTypes from 'prop-types';

const Offer = ({ offer }) => {
    const { image, bookName, rating } = offer;
    return (
        <div className="card bg-base-100 shadow-xl items-center p-4 font-workSans">
            <div className="avatar indicator">
                <span className="indicator-item badge badge-info text-white font-medium text-lg">10% OFF</span>
                <div className="w-20 h-20 rounded-lg">
                    <img alt="" src={image} />
                </div>
            </div>
            <div className="card-body text-center">
                <div className='flex gap-5 items-center'>
                    <h2 className="card-title text-3xl font-semibold">{bookName}</h2>
                    <p className='font-medium text-lg'>Rating: {rating}</p>
                </div>
                <div className="card-actions justify-center">
                    <button className="btn bg-[#23BE0A] text-white font-semibold">Buy Now</button>
                </div>
            </div>
        </div>

    );
};
Offer.propTypes = {
    offer: PropTypes.object
}
export default Offer;