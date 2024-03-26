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
        <div>
            <h2 className="text-center">Books: {books.length}</h2>

            <div className="grid grid-cols-3 gap-3">
                {
                    books.map((book, idx) => <Book key={idx} book={book}></Book>)
                }
            </div>
        </div>

    );
};

export default BooksList;