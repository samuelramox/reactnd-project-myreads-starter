import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookShelf from '../BookShelf';
import If from '../If';
import * as BooksAPI from '../../BooksAPI';

class ListBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookList: {}
    };
  }

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
    BooksAPI.update(book, value).then(() => this.updateBooks(value, book));
  };

  updateBooks = (value, book) => {
    const id = book.id;
    const { bookList } = this.state;
    let changedBook = bookList.filter(book => book.id === id);
    let newObj;
    if (changedBook.length > 0) {
      changedBook[0].shelf = value;
      const unChangedBooks = bookList.filter(book => book.id !== id);
      newObj = unChangedBooks.concat(changedBook);
    } else {
      newObj = bookList.push(book);
      window.alert('Book added!');
    }
    this.setState({
      bookList: newObj
    });
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
