import './App.css';
import Fotter from './components/Fotter';
import HomePage from './components/HomePage';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About';
import AdminLogin from './components/AdminLogin';
import ProtectedRoute from './components/ProtectedRoute';
import AdminEditGallery from './components/AdminEditGallery';
import AdminEditSlideShow from './components/AdminEditSlideShow';
import AdminEditNews from './components/AdminEditNews';
import AdminEditEvents from './components/AdminEditEvents';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Header />
            <HomePage />
            <Fotter />
          </Route>
          <Route exact path='/about'>
            <Header />
            <About />
            <Fotter />
          </Route>
          <Route exact path='/Admin'>
            <AdminLogin />
          </Route>
          <ProtectedRoute
            exact
            path='/Admin/EditGallery'
            component={AdminEditGallery}
          />
          <ProtectedRoute
            exact
            path='/Admin/EditNews'
            component={AdminEditNews}
          />
          <ProtectedRoute
            exact
            path='/Admin/EditEvents'
            component={AdminEditEvents}
          />
          <ProtectedRoute
            exact
            path='/Admin/EditSlideShow'
            component={AdminEditSlideShow}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
