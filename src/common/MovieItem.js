import { Component } from 'react';
// import { Link } from 'react-router-dom';
import './MovieItem.css';

const RED_HEART = '❤️';
const WHITE_HEART = '♡';

export default class MovieItem extends Component {
  state = {
    isFavorite: false
  }

  handleFavoriteClick = e => {
    const { onFavorited, movies } = this.props;
    e.preventDefault();
    console.log(`inside of movie item: ${movies}`);
    onFavorited(movies);
    this.setState({ isFavorite: !this.state.isFavorite });
  }

  render() {
    const { isFavorite } = this.state;
    const { movies } = this.props;

    return (
      <li className="MovieItem">
        <div>
          <h2>{movies.title}</h2>
          <p>({movies.year})</p>
        </div>
        <img src={movies.img} alt={movies.title} />
        {/* <p>{movies.genre}</p> */}
        <p>{movies.rating}</p>
        <button className="favorite" onClick={this.handleFavoriteClick}>
          {isFavorite ? RED_HEART : WHITE_HEART}
        </button>
      </li>
    );
  }
}
