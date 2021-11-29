import React from 'react';
import BookShelf from './BookShelf';
import {Link} from 'react-router-dom'

/**
 * MyBooks
 * 
 * Main component for myBooks app. 
 * This component is responsible for creating the available shelfes
 * as well as the framework around the shelfes (title and add-button)
 */
export default function MyBooks(props) {
 
  const {shelfes, books, onMoveBook} = props

  return (
    <div className="booklist">
      { /* Title */ }
      <h1 className="list-books-title">MyRead</h1>

      { /* Shelfes */ }
      <div className="list-books-content">
        { shelfes.map( (shelf, idx) => (
          <BookShelf  key={idx} 
                      shelf={shelf} 
                      books={books} 
                      shelfes={shelfes}
                      onMoveBook={onMoveBook}/>
        ))}
      </div>

      { /* Add button */}
      <div className="open-search">
          <Link to="/search"><button>Add a book</button></Link>
      </div>
    </div>
  )
}
