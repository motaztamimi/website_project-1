import './App.css';
import Fotter from './components/Fotter';
import HomePage from './components/HomePage';
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About';


function App() {

  return (
    <div className="App">
      <Router>
        <Header/>
          <Switch>
            <Route exact path='/'>
             <HomePage/>
             </Route>
             <Route exact path='/about'>
             <About/>
             </Route>
          </Switch> 
        <Fotter/>
        </Router>
    </div>
  );
}