import PropTypes from 'prop-types';
import { FaRegStar } from "react-icons/fa";

const Book = ({ book }) => {
    const {image, bookName, author, category, rating } = book;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
               {/* <div>
                <span>{tags.join('')}</span>
               </div> */}
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
    );
};

Book.propTypes = {
    book: PropTypes.array
}

export default Book;