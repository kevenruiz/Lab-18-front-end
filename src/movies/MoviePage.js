import { Component } from 'react';
import MovieList from '../common/MovieList';
import { movies } from '../data/movie-data.js';
import './MoviePage.css';

export default class MoviePage extends Component {
  state = {
    movies: movies
  }


  render() {
    const { movies } = this.state;
    console.log(movies);
    return (
      <div className="MoviePage">
        <MovieList movies={movies} />
      </div>
    );
  }

}