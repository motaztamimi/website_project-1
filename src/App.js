
import './App.css';
import Fotter from './components/Fotter';
import HomePage from './components/HomePage';
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About';
import AdminLogin from './components/AdminLogin';


function App() {

  return (
    <div className="App">
      <Router>
          <Switch>
            <Route exact path='/'>
            <Header/>
             <HomePage/>
             <Fotter/>
             </Route>
             <Route exact path='/about'>
             <Header/>
             <About/>
             <Fotter/>
             </Route>
             <Route exact path='/Admin'>
               <AdminLogin/>
             </Route>
          </Switch> 
        </Router>

    </div>
  );
}

export default App;
