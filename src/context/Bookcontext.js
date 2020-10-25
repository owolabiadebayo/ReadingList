import React, {createContext, useReducer } from 'react';
import { BookReducer } from '../BookReducer/BookReducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [Books, dispatch] = useReducer( BookReducer , [
    {title: 'name of the wind', author: 'Patrick louis', id: 1 },
    {title: 'name of the wind', author: 'Patrick louis', id: 2 },
    {title: 'name of the wind', author: 'Patrick louis', id: 3 },
  ])
  return ( 
    <BookContext.Provider value={{Books,dispatch}}>
      {props.children}
    </BookContext.Provider>
   );
}
 
export default BookContextProvider;