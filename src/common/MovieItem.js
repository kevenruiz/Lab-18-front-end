import { Component } from 'react';
import './MovieItem.css';

export default class MovieItem extends Component {

  render() {
    const { movies } = this.props;

    return (
      <li className="MovieItem">
        <div>
          <h2>{movies.title}</h2>
          <p>({movies.year})</p>
        </div> 
        <img src={movies.img} alt={movies.title} />
        <p>{movies.genre}</p>
        <p>{movies.rating}</p>
      </li>
    );
  }
}
