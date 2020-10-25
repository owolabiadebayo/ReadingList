import React from 'react'
import BookDetails from './component/BookDetails'
import BookList from './component/BookList'
import Navbar from './component/Navbar'
import BookContextProvider from './context/Bookcontext'

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar/>
        <BookList/>
        <BookDetails/>
      </BookContextProvider>
    </div>
  )
}

export default App
