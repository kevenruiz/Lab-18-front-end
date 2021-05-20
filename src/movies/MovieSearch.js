import { Component } from 'react';
import './MovieSearch.css';

export default class MovieSearch extends Component {
  state = {
    search: ''
  }

  handleChange = ({ target }) => {
    this.setState({ search: target.value });
  }

  handleSubmit = e => {
    const { onSearch } = this.props;
    e.preventDefault();
    onSearch(this.state.search);
  }

  render() {
    const { search } = this.state;

    return (
      <form className="MovieSearch" onSubmit={this.handleSubmit}>
        <input value={search} onChange={this.handleChange}/>
        <button>search</button>
      </form>
    );
  }

}