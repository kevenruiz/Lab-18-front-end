import { Component } from 'react';
import MovieList from '../common/MovieList';
import { movieData } from '../data/movie-data';
import './MoviePage.css';

export default class MoviePage extends Component {
  state = {
    movies: movieData
  }
  

  render() {
    const { movies } = this.state;
    
    return (
      <div className="MoviePage">
        <MovieList movies={movies}/>
      </div>
    );
  }

}