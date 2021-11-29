import React from 'react'
import BookShelfMenu from './BookShelfMenu';

/**
 *  Book
 * 
 *  Compomnent responsible for showing a book (with a menu to change shelf) 
 */
export default function Book(props) {

  const {shelfes, book, onMoveBook} = props;

  // Safe guard authors from an empty attribute
  const authors = book.authors ? book.authors.join(', ') : "";

  return (
    <li className="book">
      <div className="book-top">
        <div className="book-cover">
          <img className="book-cover-image" src={book.imageLinks.smallThumbnail} alt={book.title} />
        </div>
        <BookShelfMenu shelfes={shelfes} book={book} onMoveBook={onMoveBook}/>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{authors}</div>

    </li>
  )
}
