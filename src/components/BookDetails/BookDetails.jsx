import { useLoaderData, useParams } from "react-router-dom";
import saveLocalStorageData from "../Utility/LocalStorage";



const BookDetails = () => {
    const booksDetail = useLoaderData();
    const { bookId } = useParams();
    const idInt = parseInt(bookId);
    const bookDetail = booksDetail.find(bookDetail => bookDetail.bookId === idInt);

    // const handleRead = () =>{
    //     const savedBook = JSON.parse(localStorage.getItem('books')) || [];
    //     const hasBook = savedBook.find(item => item.bookId === bookDetail.bookId);
    //     if(hasBook){
    //         toast.error('You have Already Read this Book');
    //     }
    //     else{
    //         savedBook.push(bookDetail);
    //         const localValue = JSON.stringify(savedBook);
    //         localStorage.setItem('books' , localValue);
    //         toast.success('Book Added to Read List');
    //     }
    // }

    // const handleWishList = () =>{
    //     const savedBook = JSON.parse(localStorage.getItem('books')) || [];
    //     const hasBook = savedBook.find(item => item.bookId === bookDetail.bookId);
    //     if(hasBook){
    //         toast.error('You have Already Read this Book');
    //     }
    //         else{
    //             savedBook.push(bookDetail);
    //             const localValue = JSON.stringify(savedBook);
    //             localStorage.setItem('books' , localValue);
    //             toast.success('Book Added to Read List');
    //         }  
    // }


    const handleBook= ()=>{
        saveLocalStorageData(bookDetail);
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
                <p>Tag 
                    <span>{bookDetail.tags}</span>
                </p>
                <hr />
                <p>Number of Pages: {bookDetail.totalPages}</p>
                <p>Publisher: {bookDetail.publisher}</p>
                <p>Year of Publishing: {bookDetail.yearOfPublishing}</p>
                <p>Rating: {bookDetail.rating}</p>
                <div className="card-actions">
                    <button onClick={handleBook} className="btn ">Read</button>
                    <button onClick={handleBook} className="btn btn-primary">Wishlist</button>
                </div>
            </div>
        </div>
    );
};


export default BookDetails;