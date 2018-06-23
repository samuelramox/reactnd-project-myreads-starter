import React, { PureComponent } from 'react';
import BookShelfRow from '../BookShelfRow';

class BookShelf extends PureComponent {
  getShelves = books =>
    books
      .reduce((acc, cur) => {
        if (acc === undefined) {
          acc.push(cur.shelf);
        }
        if (acc !== cur.shelf) {
          acc.push(cur.shelf);
        }
        return acc;
      }, [])
      .filter((item, pos, array) => {
        return array.indexOf(item) === pos;
      });

  filterByShelf = (books, shelf) => books.filter(book => book.shelf === shelf);

  render() {
    const { books, handleChange } = this.props;
    return (
      <div>
        {this.getShelves(books).map((shelf, index) => (
          <BookShelfRow
            key={`${shelf}${index}`}
            books={this.filterByShelf(books, shelf)}
            shelf={shelf}
            handleChange={handleChange}
          />
        ))}
      </div>
    );
  }
}

export default BookShelf;
