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
        <div className="font-workSans">
            <div className="flex flex-col w-full border-opacity-50">
                <div className="grid h-20 card bg-base-300 rounded-box place-items-center font-extrabold text-4xl mt-5">Books</div>
            </div>

            <div className="text-center mt-5">
                <details className="dropdown">
                    <summary className="m-1 btn w-52 bg-[#23BE0A] text-white text-lg font-medium">Sort By <span className="text-2xl font-semibold"><RiArrowDropDownLine /></span></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-[#23BE0A] rounded-box w-52 text-white text-lg font-medium">
                        <li className="hover:bg-base-300 rounded-2xl hover:text-black"><a onClick={()=>handleFilter('rating')}>Rating</a></li>
                        <li className="hover:bg-base-300 rounded-2xl hover:text-black"><a onClick={()=>handleFilter('totalPages')}>Number of Pages</a></li>
                        <li className="hover:bg-base-300 rounded-2xl hover:text-black"><a onClick={()=>handleFilter('yearOfPublishing')}>Publisher Year</a></li>
                    </ul>
                </details>
            </div>


            <div role="tablist" className="tabs tabs-lifted">

                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" checked />
                <div role="tabpanel" className="tab-content w-80 md:w-auto bg-base-100 border-base-300 rounded-box p-6">
                    {
                        displayBooks.map((book, idx) => <div key={idx} className="card card-side bg-base-100 w-80 md:w-auto shadow-xl grid grid-cols-1 md:flex mb-5">
                            <figure className="p-10"><img className="w-40" src={book.image} alt="Movie" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-2xl font-bold">{book.bookName}</h2>
                                <p className="text-lg font-medium">By: {book.author}</p>
                                <div className="flex flex-col md:flex-row md:justify-between w-auto md:w-2/3">
                                    <div className='flex gap-2 text-[#23BE0A] font-semibold items-center'>
                                        <div>
                                            <h2>Tag</h2>
                                        </div>
                                        <div className="flex gap-4">
                                            <p className="bg-gray-200 p-1 rounded-xl">#{book.tags[0]}</p>
                                            <p className="bg-gray-200 p-1 rounded-xl">#{book.tags[1]}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CiLocationOn />
                                        <p className="font-semibold">Year of Publishing: {book.yearOfPublishing}</p>
                                    </div>
                                </div>

                                <div className="flex w-auto flex-col md:flex-row md:w-3/5 justify-between mt-2 mb-2">
                                    <div className="flex items-center gap-2 text-lg font-medium">
                                        <HiMiniUsers />
                                        <p>Publisher: {book.publisher}</p>
                                    </div>
                                    <div className="flex items-center gap-2 text-lg font-medium">
                                        <MdOutlineRestorePage />
                                        <p>Page:{book.totalPages}</p>
                                    </div>
                                </div>

                                <hr />

                                <div className="flex gap-5 text-sm font-medium items-center mt-2">
                                    <button className="bg-[#328EFF26] text-[#328EFF] rounded-2xl p-2">Category: {book.category}</button>
                                    <button className="bg-[#FFAC3326] text-[#FFAC33] rounded-2xl p-2">Rating: {book.rating}</button>
                                    <NavLink to={`/book/${book.bookId}`}><button className="bg-[#23BE0A] text-white rounded-2xl p-2 px-3 hover:bg-base-300">View Details</button></NavLink>
                                </div>
                            </div>
                        </div>)
                    }
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist Books" />
                <div role="tabpanel" className="tab-content w-80 md:w-auto bg-base-100 border-base-300 rounded-box p-6">
                    {
                        displayBooks.map((book, idx) => <div key={idx} className="card card-side bg-base-100 w-80 md:w-auto shadow-xl grid grid-cols-1 md:flex mb-5">
                            <figure className="p-10"><img className="w-40" src={book.image} alt="Movie" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-2xl font-bold">{book.bookName}</h2>
                                <p className="text-lg font-medium">By: {book.author}</p>
                                <div className="flex flex-col md:flex-row md:justify-between w-auto md:w-3/5">
                                    <div className='flex gap-2 text-[#23BE0A] font-semibold items-center'>
                                        <div>
                                            <h2>Tag</h2>
                                        </div>
                                        <div className="flex gap-4">
                                            <p className="bg-gray-200 p-1 rounded-xl">#{book.tags[0]}</p>
                                            <p className="bg-gray-200 p-1 rounded-xl">#{book.tags[1]}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CiLocationOn />
                                        <p className="font-semibold">Year of Publishing: {book.yearOfPublishing}</p>
                                    </div>
                                </div>

                                <div className="flex w-auto flex-col md:flex-row md:w-3/6 justify-between mt-2 mb-2">
                                    <div className="flex items-center gap-2 text-lg font-medium">
                                        <HiMiniUsers />
                                        <p>Publisher: {book.publisher}</p>
                                    </div>
                                    <div className="flex items-center gap-2 text-lg font-medium">
                                        <MdOutlineRestorePage />
                                        <p>Page:{book.totalPages}</p>
                                    </div>
                                </div>

                                <hr />

                                <div className="flex gap-5 text-sm font-medium items-center mt-2">
                                    <button className="bg-[#328EFF26] text-[#328EFF] rounded-2xl p-2">Category: {book.category}</button>
                                    <button className="bg-[#FFAC3326] text-[#FFAC33] rounded-2xl p-2">Rating: {book.rating}</button>
                                    <NavLink to={`/book/${book.bookId}`}><button className="bg-[#23BE0A] text-white rounded-2xl p-2 px-3 hover:bg-base-300">View Details</button></NavLink>
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