
import './App.css';
import Fotter from './components/Fotter';
import HomePage from './components/HomePage';
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About';
import ContactUsFormV1 from './components/ContactUsFormV1/ContactUsFormV1.jsx';


function App() {

  return (
    <div className="App">
      <Router>
        <Header/>
          <Switch>
            {/* <Route exact path='/'>
             <HomePage/>
             </Route>
             <Route exact path='/about'>
             <About/>
             </Route> */}
          </Switch> 
          <ContactUsFormV1 />
        <Fotter/>
        </Router>
    </div>
  );
}

export default App;
