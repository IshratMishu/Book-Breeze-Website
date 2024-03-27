import { useEffect, useState } from "react";
import Book from "../Book/Book";

const BooksList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('booksData.json')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, [])

    return (
        <div className="font-workSans mt-20">
            <h2 className="text-center font-extrabold text-4xl">Books</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {
                    books.map((book, idx) => <Book key={idx} book={book}></Book>)
                }
            </div>
        </div>

    );
};

export default BooksList;