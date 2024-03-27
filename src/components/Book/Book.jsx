import PropTypes from 'prop-types';
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const {bookId, image, bookName, author, category, rating, tags } = book;
    return (
        <Link to={`/book/${bookId}`}>
            <div className="card bg-base-100 shadow-xl font-workSans">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Book" className="rounded-xl w-40 md:w-auto" />
                </figure>
                <div className="card-body space-y-1">
                    <div className='flex gap-2 text-[#23BE0A] font-semibold text-center'>
                        <p className='bg-gray-200 p-1 rounded-xl'>{tags[0]}</p>
                        <p className='bg-gray-200 p-1 rounded-xl'>{tags[1]}</p>
                    </div>
                    <h2 className="card-title text-2xl font-bold">{bookName}</h2>
                    <p className="font-medium">By: {author}</p>
                    <hr />
                    <div className="card-actions flex justify-between font-medium">
                        <div>
                            <p>{category}</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <p>{rating}</p>
                            <p><FaRegStar /></p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

Book.propTypes = {
    book: PropTypes.object
}

export default Book;