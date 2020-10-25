import React, { useContext } from 'react'
import { BookContext } from '../context/Bookcontext';

const BookDetails = ({book}) => {
  const {dispatch} = useContext(BookContext)
  return ( 
    <li>
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
      <button onClick={()=> dispatch({type: REMOVE_BOOK, id: book.id})}>Remove Book</button>
    </li>
   );
}
 
export default BookDetails;
