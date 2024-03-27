import PropTypes from 'prop-types';

const Offer = ({ offer }) => {
    const { image, bookName, rating } = offer;
    return (

        <div className="card bg-base-100 shadow-xl items-center p-4">
            <div className="avatar indicator">
                <span className="indicator-item badge badge-secondary">10% OFF</span>
                <div className="w-20 h-20 rounded-lg">
                    <img alt="" src={image} />
                </div>
            </div>
            <div className="card-body  text-center">
                <div className='flex gap-5 items-center'>
                <h2 className="card-title">{bookName}</h2>
                <p>Rating: {rating}</p>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>

    );
};
Offer.propTypes = {
    offer: PropTypes.object
}
export default Offer;