import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default class Home extends Component {

  render() {
    return (
      <div className="Home">
        <h2>Home Page</h2>

        <p><Link to='/movies'>See the List</Link></p>


        <Link to='/auth'>Log in or Sign up!</Link>
      </div>
    );
  }

}