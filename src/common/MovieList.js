import { Component } from 'react';
import MovieItem from './MovieItem';
import './MovieList.css';

export default class MovieList extends Component {

  render() {
    const { movies, onFavorited } = this.props;

    return (
      <ul className="MovieList">
        {movies.map(movie => (
          <MovieItem key={movie.movieId} movies={movie} onFavorited={onFavorited}/>
        ))}
      </ul>
    );
  }
}
