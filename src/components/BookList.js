import React from 'react'
import Book from './Book';

/**
 *  BookList
 * 
 *  Represent a list of books
 */
export default function BookList(props) {

  const {shelfes, onMoveBook} = props;

  // Safe-guard the books to make sure we always have an array
  const books = props.books || [];
  
  return (
    <ol className="books-grid">
    {
      books.map( (book, idx) => (
        <Book key={idx} shelfes={shelfes} book={book} onMoveBook={onMoveBook}/>
      ))
    }
  </ol>
  )
}
