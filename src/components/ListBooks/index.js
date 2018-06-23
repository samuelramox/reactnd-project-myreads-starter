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

  handleChange = (e, book) => {
    const { value } = e.target;
    const { bookList } = this.state;
    BooksAPI.update(book, value).then(res => this.updateBooks(value, book));
  };

  render() {
    const { bookList } = this.state;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <If test={bookList.length > 0}>
            <BookShelf books={bookList} handleChange={this.handleChange} />
          </If>
        </div>
        <div className="open-search">
          <Link
            to={{
              pathname: '/search',
              handleChange: this.handleChange,
              state: { bookList }
            }}
          >
            Add a book
          </Link>
        </div>
      </div>
    );
  }
}

export default ListBooks;
