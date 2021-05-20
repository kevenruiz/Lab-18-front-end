import { Component } from 'react';
import MovieList from '../common/MovieList';
import Loader from '../common/Loader';
import { getFavorites, deleteFavorite, addFavorites } from '../utils/api-utils'
import './FavoritesPage.css';

export default class FavoritesPage extends Component {

  state = {
    favorites: [],
    loading: false
  }

  async componentDidMount() {
    try {
      this.setState({ loading: true });

      const favorites = await getFavorites();
      this.setState({ favorites: favorites })
    }
    catch (err) {
      console.log(err.message);
    }
    finally {
      this.setState({ loading: false })
    }
  }

  handleFavorited = async favorite => {
    try {
      this.setState({ loading: true })

      if (favorite.deleted) {
        const { favorites } = this.state;

        const newFavorite = await addFavorites(favorite);

        const updateFavorites = favorites.map(fav => {
          return fav.id === favorite.id ? newFavorite : fav;
        });

        this.setState({ favorites: updateFavorites });
      } else {
        await deleteFavorite(favorite.id);
        favorite.deleted = true;
      }
    }

    catch (err) {
      console.log(err.message);
    }

    finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { favorites, loading } = this.state;

    return (
      <div className="FavoritesPage">
        <Loader loading={loading} alt='loading...' />
        <MovieList movies={favorites} onFavorited={this.handleFavorited} />
      </div>
    );
  }

}