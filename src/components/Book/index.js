import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Book extends PureComponent {
  render() {
    const { authors, imageLinks, shelf, title } = this.props.data;
    const { handleChange } = this.props;
    const book = this.props.data;

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${imageLinks.smallThumbnail})`
              }}
            />
            <div className="book-shelf-changer">
              <select
                defaultValue={shelf}
                onChange={e => handleChange(e, book)}
              >
                <option value="none" disabled>
                  Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{title}</div>

          <div className="book-authors">{authors}</div>
        </div>
      </li>
    );
  }
}

Book.PropTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  authors: PropTypes.string.isRequired
};

export default Book;
