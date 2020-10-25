import React, { useContext } from 'react';
import { BookContext } from '../context/Bookcontext';


const BookList = () => {
  const { Books } = useContext(BookContext);
  return Books.length ? ( 
    <div className="book-list">
    <ul>
    {Books.map(book => <BookDetails book={book} key={book.id}/>
    )}
    </ul>
    </div>):
     (
      <div className="empty">
        <p>No book in the store</p>
      </div>
    )
}
 
export default BookList;