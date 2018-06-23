import React, { PureComponent } from 'react';
import Book from '../Book';

class BookShelfRow extends PureComponent {
  render() {
    const { shelf, books } = this.props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelf}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map(book => <Book key={book.id} data={book} />)}
          </ol>
        </div>
      </div>
    );
  }
}

export default BookShelfRow;
