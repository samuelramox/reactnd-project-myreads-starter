import React, { PureComponent } from 'react';
import Book from '../Book';

class BookShelfRow extends PureComponent {
  isSearch = shelf => !shelf;

  renderBooks = (shelf, books) => {
    if (this.isSearch(shelf)) {
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelf}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map(book => <Book key={book.id} data={book} />)}
          </ol>
        </div>
      </div>;
    }
    return (
      <div className="search-books-results">
        <ol className="books-grid">
          {books.map(book => <Book key={book.id} data={book} />)}
        </ol>
      </div>
    );
  };

  render() {
    const { shelf, books } = this.props;
    return this.renderBooks(shelf, books);
  }
}

export default BookShelfRow;
