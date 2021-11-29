import React from 'react'
import Book from './Book';

/**
 *  BookShelfMenu
 * 
 *  The menu that allows a user to select a book shelf
 *  communicates back up the tree using the onMoveBook-prop
 *  
 */
export default function BookShelfMenu(props) {

  const {shelfes, book} = props;

  const handleMenuChange = (e) => {
    if(props.onMoveBook) {
      props.onMoveBook(book, e);
    }
  }

  // Determine which menu-item that should be selected. 
  // TODO: none is hard-coded, should be handled better
  const shelf = book.shelf || 'none';

  return (
    <div className="book-shelf-changer">
      <select value={shelf} onChange={(e) => handleMenuChange(e.target.value)}>
        <option value="moveto" disabled>Move To...</option>
        { shelfes.map( (shelf, idx) => (
          <option key={idx} value={shelf.name}>
            {shelf.title}
          </option> 
        ))}
        <option value="none">None</option>
      </select>
    </div>
  )
}
