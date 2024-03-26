import { toast } from "react-toastify";


     const saveLocalStorageReadBookData = (bookDetail) =>{
    const savedReadBooks = JSON.parse(localStorage.getItem('readBooks')) || [];
    const savedWishlistBooks = JSON.parse(localStorage.getItem('wishlistBooks')) || [];

    const isReadList = savedReadBooks.find(item => item.bookId === bookDetail.bookId);
    const isWishList = savedWishlistBooks.find(item => item.bookId === bookDetail.bookId);

    if (!isReadList) {
        savedReadBooks.push(bookDetail);
        localStorage.setItem('readBooks', JSON.stringify(savedReadBooks));

        if (isWishList) {
            const updatedWishlistBooks = savedWishlistBooks.filter(item => item.bookId !== bookDetail.bookId);
            localStorage.setItem('wishlistBooks', JSON.stringify(updatedWishlistBooks));
        }
        toast.success('Book Added to Read List');
    } else {
        toast.error('You have Already Read this Book');
    }       
};


export const saveLocalStorageWishListData = (bookDetail) =>{
    const savedReadBooks = JSON.parse(localStorage.getItem('readBooks')) || [];
    const savedWishlistBooks = JSON.parse(localStorage.getItem('wishlistBooks')) || [];

    const isReadList = savedReadBooks.find(item => item.bookId === bookDetail.bookId);
    const isWishList = savedWishlistBooks.find(item => item.bookId === bookDetail.bookId);

    if (!isWishList && !isReadList) {
        savedWishlistBooks.push(bookDetail);
        localStorage.setItem('wishlistBooks', JSON.stringify(savedWishlistBooks));
        toast.success('Book Added to Wishlist');
    } else if (isReadList) {
        toast.error('You have Already Read this Book');
    }       
};



export const getBookFromLocalStorage =()=>{
    const getDefaultBook = JSON.parse(localStorage.getItem('books')) || [];
    return getDefaultBook;
}

export default saveLocalStorageReadBookData;