/** @format */

import './App.css';
import Fotter from './components/Fotter';
import HomePage from './components/HomePage';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutUs from './components/AboutUs/AboutUs';
import AdminLogin from './components/AdminLogin';
import ProtectedRoute from './components/ProtectedRoute';
import AdminEditGallery from './components/AdminEditGallery';
import AdminEditSlideShow from './components/AdminEditSlideShow';
import AdminEditNews from './components/AdminEditNews';
import AdminEditEvents from './components/AdminEditEvents';
import EditorPageImlimentation from './components/Editor/EditorPageImlimentation';
import ListOfDep from './components/ListOfDep';
import InsidePage3 from './components/InsidePage';
import { Chatbot } from 'react-chatbot-kit';
import config from './components/ChatBot/config';
import MessageParser from './components/ChatBot/MessageParser';
import ActionProvider from './components/ChatBot/ActionProvider';
import AdminAddNews from './components/adminAddNews/AdminAddNews';
import AllResearchs from './components/Research/AllResearchs';
import ContactUsFormV1 from './components/ContactUsFormV1/ContactUsFormV1';
import ButtonBot from './components/ChatBot/BottonHomePage/BottonHomePage';
import Photos from './components/Photos';
import Videos from './components/Videos';
function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/Chatbot'>
            <Chatbot
              config={config}
              messageParser={MessageParser}
              actionProvider={ActionProvider}
            />
          </Route>
          <Route exact path='/'>
            <Header />
            <HomePage />
            <Fotter />
            <Chatbot
              config={config}
              messageParser={MessageParser}
              actionProvider={ActionProvider}
            />
            <ButtonBot />
          </Route>
          <Route exact path='/AboutUs'>
            <Header />
            <AboutUs />
            <Fotter />
          </Route>
          <Route exact path='/Admin'>
            <AdminLogin />
          </Route>
          <Route exact path='/kfarShaol'>
            <Header />
            <ListOfDep departmentName='כפר שאול' />
            <Fotter />
          </Route>
          <Route exact path='/Etanim'>
            <Header />
            <ListOfDep departmentName='איתנים' />
            <Fotter />
          </Route>
          <Route exact path='/sherotKhelate'>
            <Header />
            <ListOfDep departmentName='שירות קהילתי' />
            <Fotter />
          </Route>
          <Route exact path='/kfarShaol/0'>
            <Header />
            <InsidePage3 department='כפר שאול' url='0' />
            <Fotter />
          </Route>
          <Route exact path='/kfarShaol/1'>
            <Header />
            <InsidePage3 department='כפר שאול' url='1' />
            <Fotter />
          </Route>
          <Route exact path='/kfarShaol/2'>
            <Header />
            <InsidePage3 department='כפר שאול' url='2' />
            <Fotter />
          </Route>
          <Route exact path='/kfarShaol/3'>
            <Header />
            <InsidePage3 department='כפר שאול' url='3' />
            <Fotter />
          </Route>
          <Route exact path='/kfarShaol/4'>
            <Header />
            <InsidePage3 department='כפר שאול' url='4' />
            <Fotter />
          </Route>
          <Route exact path='/kfarShaol/5'>
            <Header />
            <InsidePage3 department='כפר שאול' url='5' />
            <Fotter />
          </Route>
          <Route exact path='/kfarShaol/6'>
            <Header />
            <InsidePage3 department='כפר שאול' url='6' />
            <Fotter />
          </Route>

          <Route exact path='/pdf'>
            <Header />
            <AllResearchs />
            <Fotter />
          </Route>

          <Route exact path='/ContactUs'>
            <Header />
            <ContactUsFormV1 />
            <Fotter />
          </Route>

          <Route exact path='/gallery'>
            <Header />
            <Photos />
            <Fotter />
          </Route>
          <Route exact path='/Videos'>
            <Header />
            <Videos />
            <Fotter />
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
            path='/Admin/EditNews/AddNews'
            component={AdminAddNews}
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
          <ProtectedRoute
            exact
            path='/Admin/EditPages'
            component={EditorPageImlimentation}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
