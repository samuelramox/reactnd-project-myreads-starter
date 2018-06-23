import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import BookShelfRow from '../BookShelfRow';
import { search } from '../../BooksAPI';

class Search extends PureComponent {
  state = {
    query: ''
  };

  handleTextChange = e => {
    const query = e.target.value;
    if (query.length >= 3) {
      search(query, 20).then(res => this.setState({ books: res }));
    }
  };

  componentWillMount = () => {
    const { bookList } = this.props.location.state;
    this.setState({
      books: bookList
    });
  };

  render() {
    const { books } = this.state;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>

          <div className="search-books-input-wrapper">
            <input
              type="text"
              onChange={e => this.handleTextChange(e)}
              placeholder="Search by title or author"
            />
          </div>
        </div>

        <BookShelfRow shelf={false} books={books} />
      </div>
    );
  }
}

export default Search;
