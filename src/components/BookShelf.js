import React from 'react'
import BookList from './BookList';

/**
 * BookShelf
 * 
 * A section with responsibility to show the section's title
 * and fill all books for that section
 */
export default function BookShelf(props){

  const {shelf, books, shelfes, onMoveBook} = props;
  
  // Filter out the books that should be shown on this shelf
  const booksInShelf = books.filter( (b) => b.shelf === shelf.name)

  return (
    <div className="bookshelf">
      <h3 className="bookshelf-title">{shelf.title}</h3>
      <div className="bookshelf-books">
        <BookList books={booksInShelf} shelfes={shelfes} onMoveBook={onMoveBook} />
      </div>
    </div>
  )
}
