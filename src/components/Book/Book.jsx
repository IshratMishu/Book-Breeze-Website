import PropTypes from 'prop-types';
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const {bookId, image, bookName, author, category, rating, tags } = book;
    return (
        <Link to={`/book/${bookId}`}>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <div className='flex gap-2 text-success'>
                        <p>{tags[0]}</p>
                        <p>{tags[1]}</p>
                    </div>
                    <h2 className="card-title">{bookName}</h2>
                    <p>By: {author}</p>
                    <hr />
                    <div className="card-actions">
                        <div>
                            <p>{category}</p>
                        </div>
                        <div className='flex'>
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