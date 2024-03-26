import { useLoaderData, useParams } from "react-router-dom";
import saveLocalStorageReadBookData, { saveLocalStorageWishListData } from "../Utility/LocalStorage";



const BookDetails = () => {
    const booksDetail = useLoaderData();
    const { bookId } = useParams();
    const idInt = parseInt(bookId);
    const bookDetail = booksDetail.find(bookDetail => bookDetail.bookId === idInt);


// Read List
const handleRead = () => {
    saveLocalStorageReadBookData(bookDetail);
}

// Wish List
const handleWishList = () => {
    saveLocalStorageWishListData(bookDetail);
}

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={bookDetail.image} alt="book" /></figure>
            <div className="card-body">
                <h2 className="card-title">{bookDetail.bookName}</h2>
                <p>By: {bookDetail.author}</p>
                <hr />
                <p>{bookDetail.category}</p>
                <hr />
                <p>Review: {bookDetail.review}</p>
                <div className='flex gap-2 text-success'>
                        <div>
                            <h2>Tag</h2>
                        </div>
                        <div className="flex gap-2">
                        <p>#{bookDetail.tags[0]}</p>
                        <p>#{bookDetail.tags[1]}</p>
                        </div>
                    </div>
                <hr />
                <p>Number of Pages: {bookDetail.totalPages}</p>
                <p>Publisher: {bookDetail.publisher}</p>
                <p>Year of Publishing: {bookDetail.yearOfPublishing}</p>
                <p>Rating: {bookDetail.rating}</p>
                <div className="card-actions">
                    <button onClick={()=>handleRead(bookDetail)} className="btn">Read</button>
                    <button onClick={()=>handleWishList(bookDetail)} className="btn btn-primary">Wishlist</button>
                </div>
            </div>
        </div>
    );
};


export default BookDetails;