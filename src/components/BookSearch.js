import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {search} from '../api/BooksAPI';
import BookList from './BookList';

/**
 * BookSearch-component
 * 
 * Main component for managing search of books. 
 * This component keeps the search result but commiunicatates with
 * parent component for changes.
 * 
 */
export default class BookSearch extends Component {

  state = {
    result : []     // Result of book search
  }

  // The search method, invoked when user types a query
  //  Method will only perform a api-call if the query is set. 
  //  An empty query will result in an empty result.
  doSearch(query) {
    if (query) {
      search(query)
        .then(b => {
          // If result contains an error then no books were found and we should set an empty array as result
          const books = b.error ? [] : b;
          this.setState({ result : books}) 
        });
      } else {
        // If there is nothing to query then clear the result.
        this.setState({ result : [] }) 
      }
  }


  render() {

    // Destruct properties and states
    const {shelfes, onMoveBook, myBooks} = this.props;
    const booksFound = this.state.result ? this.state.result.length > 0 : false;
    
    // Replace books that are already in a shelf (ie myBooks). This way we get the current shelf of that book
    const books = this.state.result.map( (b) => (
      myBooks.find( (mb) => mb.id === b.id ) || b
    ));

    return (
      <div className="search-books">
        { /* Search bar */ }
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>

          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" onChange={(e) => this.doSearch(e.target.value)}/>
          </div>
        </div>

        { /* Search result*/ }
        <div className="search-books-results">
          {
            booksFound ? 
              <BookList books={books} shelfes={shelfes} onMoveBook={onMoveBook} />
              :
              <div className="search-no-result">No books were found.</div>
          }
        </div>
      </div>
    )
  }
}
