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
        <div className="card lg:card-side bg-base-100 shadow-xl font-workSans mt-5">
            <figure className="px-20"><img src={bookDetail.image} className="w-auto h-auto md:w-96 md:h-80" alt="book" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">{bookDetail.bookName}</h2>
                <p className="font-medium">By: {bookDetail.author}</p>
                <hr />
                <p className="font-medium text-gray-500">{bookDetail.category}</p>
                <hr />
                <p className="font-medium text-sm"><span className="font-bold text-lg">Review:</span> {bookDetail.review}</p>
                <div className='flex gap-3 font-semibold text-xl items-center'>
                    <div>
                        <h2>Tag</h2>
                    </div>
                    <div className="flex flex-col md:flex-row gap-2 text-[#23BE0A] font-medium text-center">
                        <p className='bg-gray-200 p-1 rounded-xl'>#{bookDetail.tags[0]}</p>
                        <p className='bg-gray-200 p-1 rounded-xl'>#{bookDetail.tags[1]}</p>
                    </div>
                </div>
                <hr />
                {/* <p>Number of Pages: <span className="font-bold">{bookDetail.totalPages}</span></p>
                <p>Publisher: <span className="font-bold">{bookDetail.publisher}</span></p>
                <p>Year of Publishing: <span className="font-bold">{bookDetail.yearOfPublishing}</span></p>
                <p>Rating: <span className="font-bold">{bookDetail.rating}</span></p> */}

                <table className="table">
                    <tbody>
                        <tr>
                            <td>Number of Pages:</td>
                            <td className="font-bold">{bookDetail.totalPages}</td>
                        </tr>
                        <tr>
                            <td>Publisher:</td>
                            <td className="font-bold">{bookDetail.publisher}</td>
                        </tr>
                        <tr>
                            <td>Year of Publishing:</td>
                            <td className="font-bold">{bookDetail.yearOfPublishing}</td>
                        </tr>
                        <tr>
                            <td>Rating:</td>
                            <td className="font-bold">{bookDetail.rating}</td>
                        </tr>
                    </tbody>
                </table>

                <div className="card-actions">
                    <button onClick={() => handleRead(bookDetail)} className="btn border-2 border-gray-400">Read</button>
                    <button onClick={() => handleWishList(bookDetail)} className="btn bg-[#50B1C9] text-white font-semibold">Wishlist</button>
                </div>
            </div>
        </div>
    );
};


export default BookDetails;