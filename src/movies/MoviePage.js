import { Component } from 'react';
import MovieList from '../common/MovieList';
import Loader from '../common/Loader';
import { getFavorites, getMovies, addFavorites, deleteFavorite } from '../utils/api-utils';
import './MoviePage.css';
import MovieSearch from './MovieSearch';

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

  handleSearch = async search => {
    try {
      this.setState({ loading: true });
      const favorites = await getFavorites();
      const movies = await getMovies(search);
      const refinedMovies = movies.map(movie => {
        const found = favorites.find(favorite => favorite.movieId === movie.movieId);
        return found ? found : movie;
      });
      this.setState({ movies: refinedMovies });
    }
    catch (err) {
      console.log(err.message);
    }
    finally {
      this.setState({ loading: false });
    }
  }


  render() {
    const { movies, loading } = this.state;
  
    return (
      <div className="MoviePage">
        <Loader loading={loading}/>
        <MovieSearch onSearch={this.handleSearch}/>
        <MovieList movies={movies} />
      </div>
    );
  }

}