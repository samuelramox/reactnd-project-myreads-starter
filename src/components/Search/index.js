import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import BookShelfRow from '../BookShelfRow';
import { search } from '../../BooksAPI';
import If from '../If';

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
    const { handleChange } = this.props.location;

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
        <If test={books.length > 0}>
          <BookShelfRow
            shelf={false}
            books={books}
            handleChange={handleChange}
          />
        </If>
        <If test={books.length === undefined}>
          <div className="search-box">
            <h1 className="search-message">No result for this search</h1>
          </div>
        </If>
      </div>
    );
  }
}

export default Search;
