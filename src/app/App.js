import { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from '../home/Home';
import Auth from '../auth/Auth';
import MoviePage from '../movies/MoviePage';
import FavoritesPage from '../favorites/FavoritesPage';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import './App.css';

class App extends Component {
  state = {
    token: window.localStorage.getItem('TOKEN'),
    userId: window.localStorage.getItem('USER_ID'),
    userName: window.localStorage.getItem('USER_NAME')
  }

  handleUser = user => {
    window.localStorage.setItem('TOKEN', user.token);
    window.localStorage.setItem('USER_ID', user.id);
    window.localStorage.setItem('USER_NAME', user.name);
    this.setState({ token: user.token });
  }

  render() {
    const { token, userName } = this.state;

    return (
      <div className="App">
        <Router>
          <Header userName={userName} />
          <main>

            <Switch>
              <Route path="/" exact={true}
                render={routerProps => (
                  <Home {...routerProps} />
                )}
              />

              <Route path="/auth" exact={true}
                render={routerProps => (
                  <Auth {...routerProps}
                    onUser={this.handleUser}
                  />
                )}
              />

              <Route path="/movies" exact={true}
                render={routerProps => (
                  token
                    ? <MoviePage {...routerProps} />
                    : <Redirect to ="/auth"/>
                )}
              />

              <Route path="/favorites"
                render={routerProps => (
                  token
                    ? <FavoritesPage {...routerProps}/>
                    : <Redirect to="/auth"/>
                )}
              />

              <Redirect to="/" />

            </Switch>
          </main>
          <Footer />
        </Router>
      </div>
    );
  }

}

export default App;
