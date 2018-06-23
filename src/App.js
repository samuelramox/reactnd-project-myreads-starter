import React from 'react';
// import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom';
import Search from './components/Search';
import ListBooks from './components/ListBooks';
import './App.css';

class BooksApp extends React.Component {
  state = {
    showSearchPage: false
  };

  render() {
    return (
      <div className="app">
        <Route exact path="/" component={ListBooks} />
        <Route path="/search" component={Search} />
      </div>
    );
  }
}

export default BooksApp;
