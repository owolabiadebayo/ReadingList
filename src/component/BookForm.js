import React, { useContext,useState } from 'react'
import { BookContext } from '../context/Bookcontext';

const BookForm = () => {
  const { dispatch } = useContext(BookContext)
  const [title, settitle] = useState('')
  const [author, setAuthor] = useState('')
  const handleSubmit =(e) => {
    e.preventDefault()
    dispatch({type: 'ADD_BOOK', book: {title,author}});
    setAuthor('');
    settitle('');

  }
  return ( 
    <form onSubmit = {handleSubmit}>
      <label>Song Name</label>
      <input type="text" placeholder='book title' value={title} required onChange={(e) => settitle(e.target.value)} />
      <input type="text" placeholder='book title' value={author} required onChange={(e) => setAuthor(e.target.value)} />
      <input type="submit" value="add song" />
    </form>
   );
}
}
 
export default BookForm;
