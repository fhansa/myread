import React, { Component } from 'react'
import './App.css';
import { Route, Switch } from 'react-router-dom';
import MyBooks from './components/MyBooks';
import BookSearch from './components/BookSearch';

import { getAll, getShelfes, update } from './api/BooksAPI';

/**
 * Main App
 * 
 *  Contains data for myBooks 
 * 
 */
export default class App extends Component {

  state = {
    books : [],       // List of myBooks
    shelfes : []      // List of available shelfs
  }

  componentDidMount() {
    // Get possible shelfes 
    this.setState( () => (
      {shelfes: getShelfes()}
    ));

    // And all my books
    getAll()
      .then(b => this.setState({ books : b }) );
  }
  
  // Move a book between shelfes
  moveBook(book, toShelf) {
    // Update database
    update(book, toShelf)
      .then(res => {
        console.log(res);
      });

    //  update shelf of the changed book or add the book if it was a new one.
    if ( !this.state.books.find( (b) => b.id === book.id)) {
      // Add book to collection
      this.setState( (cs) => (
        {books: cs.books.concat({...book, shelf:toShelf })}
      ))
    } else {
      // Update shelf of existing book
      this.setState( (cs) => (
        {books: cs.books.map( (b) => ( b.id === book.id ? {...b, shelf:toShelf} : {...b} ) ) }
      ))  
    }
  }

  render() {

    const {shelfes, books} = this.state;

    return (
      <div className="app">
        <Switch>
          <Route exact path="/">
            <MyBooks books={books} shelfes={shelfes} onMoveBook={ (book, shelf) => this.moveBook(book, shelf) } />
          </Route>
          <Route path="/search">
            <BookSearch myBooks={books} shelfes={shelfes} onMoveBook={ (book, shelf) => this.moveBook(book, shelf) }/>
          </Route>
        </Switch>
      </div>
    );
  }
}

