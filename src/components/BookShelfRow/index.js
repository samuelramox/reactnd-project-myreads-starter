import React, { PureComponent } from 'react';
import Book from '../Book';

class BookShelfRow extends PureComponent {
  renderBooks = (shelf, books, handleChange) => {
    if (shelf) {
      return (
        <div className="bookshelf">
          <h2 className="bookshelf-title">{shelf}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {books.map(book => (
                <Book key={book.id} data={book} handleChange={handleChange} />
              ))}
            </ol>
          </div>
        </div>
      );
    }
    return (
      <div className="search-books-results">
        <ol className="books-grid">
          {books.map(book => (
            <Book key={book.id} data={book} handleChange={handleChange} />
          ))}
        </ol>
      </div>
    );
  };

  render() {
    const { shelf, books, handleChange } = this.props;
    return this.renderBooks(shelf, books, handleChange);
  }
}

export default BookShelfRow;
