import React, { useContext } from 'react';
import { BookContext } from '../context/Bookcontext';


const Navbar = () => {
  const {Books} = useContext(BookContext)
  return ( <div className="navbar">
    <h1>Bayo is reading book</h1>
    <p> currently you have {Books.lenght} to get through </p>
  </div> );
}
 
export default Navbar;