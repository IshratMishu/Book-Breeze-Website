import { toast } from "react-toastify";


const saveLocalStorageData = (bookDetail) =>{
    const savedBook = JSON.parse(localStorage.getItem('books')) || [];
        const hasBook = savedBook.find(item => item.bookId === bookDetail.bookId);
        if(hasBook){
            toast.error('You have Already Read this Book');
        }
            else{
                savedBook.push(bookDetail);
                const localValue = JSON.stringify(savedBook);
                localStorage.setItem('books' , localValue);
                toast.success('Book Added to Read List');
            }         
}

export default saveLocalStorageData;