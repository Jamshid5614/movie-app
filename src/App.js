import './App.css';
import AllMoviesPage from './components/allMoviePage';
import {BrowserRouter,Link,NavLink,Switch,Route} from 'react-router-dom';
import AllMovies from '../src/components/allMovies';
import SearchingPage from './components/searchMoviesPage';
import TvShowsPage from './components/tvShowsPage';
import SelectedMoviePage from './components/selectedMoviePage';


function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={AllMoviesPage} />
          <Route exact path="/all-movies" component={AllMovies} />
          <Route exact path="/searching" component={SearchingPage} />
          <Route exact path="/tv-shows" component={TvShowsPage} />
          <Route exact path="/selectedMovie" component={SelectedMoviePage} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App;
