import { Component } from 'react';
import MovieList from '../common/MovieList';
import { movies } from '../data/movie-data.js';
import Loader from '../common/Loader';
import { getFavorites, getMovies, addFavorites, deleteFavorite } from '../utils/api-utils';
import './MoviePage.css';

export default class MoviePage extends Component {
  state = {
    movies: [],
    loading: false,
    favorites: [],
  }

  async componentDidMount() {
    try {
      this.setState({ loading: true });
      const favorites = await getFavorites();
      this.setState({ favorites: favorites });
    }
    catch (err) {
      console.log(err.message);
    }
    finally {
      this.setState({ loading: false });
    }
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