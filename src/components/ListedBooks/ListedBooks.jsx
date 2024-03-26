import { useEffect, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineRestorePage } from "react-icons/md";
import { HiMiniUsers } from "react-icons/hi2";
import { getBookFromLocalStorage, getWishlistFromLocalStorage } from "../Utility/LocalStorage";
import { NavLink } from "react-router-dom";


const ListedBooks = () => {
    const [readList, setReadList] = useState([]);
    const [wishList, setWishList] = useState([]);
    const [displayBooks, setDisplayBooks] = useState([]);

    const handleFilter = filter =>{
        let sortedBooks = [...readList , ...wishList]; 
        if (filter === 'rating') {
            sortedBooks.sort((a, b) => b.rating - a.rating);
        } else if (filter === 'totalPages') {
            sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
        } else if (filter === 'yearOfPublishing') {
            sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
        }
        setDisplayBooks(sortedBooks);
    };

    useEffect(() => {
        const read = getBookFromLocalStorage();
        const wishList = getWishlistFromLocalStorage();
        setReadList(read);
        const filteredWishList = wishList.filter(book => !read.some(r => r.id === book.id));
    setWishList(filteredWishList);
        const mergedBooks = [...read, ...filteredWishList];
        setDisplayBooks(mergedBooks);
    }, [])

    return (
        <div>
            <div className="flex flex-col w-full border-opacity-50">
                <div className="grid h-20 card bg-base-300 rounded-box place-items-center">Books</div>
            </div>

            <div className="text-center">
                <details className="dropdown">
                    <summary className="m-1 btn">Sort By <span><RiArrowDropDownLine /></span></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><a onClick={()=>handleFilter('rating')}>Rating</a></li>
                        <li><a onClick={()=>handleFilter('totalPages')}>Number of Pages</a></li>
                        <li><a onClick={()=>handleFilter('yearOfPublishing')}>Publisher Year</a></li>
                    </ul>
                </details>
            </div>


            <div role="tablist" className="tabs tabs-lifted">

                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" checked />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    {
                        displayBooks.map((book, idx) => <div key={idx} className="card card-side bg-base-100 shadow-xl">
                            <figure><img src={book.image} alt="Movie" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{book.bookName}</h2>
                                <p>By: {book.author}</p>
                                <div className="flex ">
                                    <div className='flex gap-2 text-success'>
                                        <div>
                                            <h2>Tag</h2>
                                        </div>
                                        <div className="flex gap-2">
                                            <p>#{book.tags[0]}</p>
                                            <p>#{book.tags[1]}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <CiLocationOn />
                                        <p>Year of Publishing: {book.yearOfPublishing}</p>
                                    </div>
                                </div>

                                <div className="flex">
                                    <div className="flex">
                                        <HiMiniUsers />
                                        <p>Publisher: {book.publisher}</p>
                                    </div>
                                    <div className="flex">
                                        <MdOutlineRestorePage />
                                        <p>Page:{book.totalPages}</p>
                                    </div>
                                </div>

                                <hr />

                                <div className="flex gap-3">
                                    <button>Category: {book.category}</button>
                                    <button>Rating: {book.rating}</button>
                                    <NavLink to={`/book/${book.bookId}`}><button>View Details</button></NavLink>
                                </div>
                            </div>
                        </div>)
                    }
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist Books" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    {
                        displayBooks.map((book, idx) => <div key={idx} className="card card-side bg-base-100 shadow-xl">
                            <figure><img src={book.image} alt="Movie" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{book.bookName}</h2>
                                <p>By: {book.author}</p>
                                <div className="flex ">
                                    <div className='flex gap-2 text-success'>
                                        <div>
                                            <h2>Tag</h2>
                                        </div>
                                        <div className="flex gap-2">
                                            <p>#{book.tags[0]}</p>
                                            <p>#{book.tags[1]}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <CiLocationOn />
                                        <p>Year of Publishing: {book.yearOfPublishing}</p>
                                    </div>
                                </div>

                                <div className="flex">
                                    <div className="flex">
                                        <HiMiniUsers />
                                        <p>Publisher: {book.publisher}</p>
                                    </div>
                                    <div className="flex">
                                        <MdOutlineRestorePage />
                                        <p>Page:{book.totalPages}</p>
                                    </div>
                                </div>

                                <hr />

                                <div className="flex gap-3">
                                    <button>Category: {book.category}</button>
                                    <button>Rating: {book.rating}</button>
                                    <NavLink to={`/book/${book.bookId}`}><button>View Details</button></NavLink>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ListedBooks;