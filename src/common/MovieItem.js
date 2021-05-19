import { Component } from 'react';
import './MovieItem.css';

export default class MovieItem extends Component {
  
  render() {
    const { movies } = this.props;

    return (
      <li className="MovieItem">
        <h2>{movies.title}</h2>
        <img src={movies.img} alt={movies.title}/>
        <p>{movies.year}</p>
        <p>{movies.genre}</p>
        <p>{movies.rating}</p>
      </li>
    );
  }
}
