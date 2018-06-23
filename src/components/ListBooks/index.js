import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookShelf from '../BookShelf';
import If from '../If';
import * as BooksAPI from '../../BooksAPI';

class ListBooks extends Component {
  state = {
    bookList: {}
  };

  componentDidMount = () => {
    this.getBooks(BooksAPI.getAll());
  };

  getBooks = obj =>
    obj.then(res => {
      this.setState({
        bookList: res
      });
    });

  render() {
    const { bookList } = this.state;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <If test={bookList.length > 0}>
            <BookShelf books={bookList} />
          </If>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default ListBooks;
