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
import AdminEditSlideShow from './components/Admin/AdminEditSlideShow';
import AdminEditNews from './components/AdminEditNews';
import AdminEditEvents from './components/AdminEditEvents';
import EditorPageImlimentation from './components/Editor/EditorPageImlimentation';
import ListOfDep from './components/ListOfDep';
import InsidePage3 from './components/InsidePage';

import AdminAddNews from './components/adminAddNews/AdminAddNews';
import AllResearchs from './components/Research/AllResearchs';
import ContactUsFormV1 from './components/ContactUsFormV1/ContactUsFormV1';

import Photos from './components/Photos';
import Videos from './components/Videos';
import AdminEditDoctors from './components/AdminEditDoctors';
import AddDoctors from './components/AdminAddDoctors/AddDoctors';
import NewsPagebyid from './components/NewsPagebyid/NewsPagebyid';
import Googlemap from './components/GoogleMap/Googlemap';
import AllNewsPage from './components/AllNewsPage/AllNewsPage';
import AdminAddResearch from './components/AdminResearch/AdminAddResearch';
import AdminResearch from './components/AdminResearch/AdminResearch';
import styled from 'styled-components';
import AdminAddChatBotQuestion from './components/NewCharBot/AdminAddChatBotQuestion';

import MyNewChatBot from '../src/components/NewCharBot/MyNewChatBot';
import Search from './search/Search';
import Noseem from './components/NOSEEM/Noseem';
import ScrollToTop from './components/ScrollToTop';
import Googlemap2 from './components/GoogleMap/Googlemap2';
import AdminEditNews1 from './components/adminAddNews/AdminEditNews1';
import Updating from './components/Updating';
function App() {
  const details1 = { width: '500', height: '500' };
  const div = styled.h2`
    text-align: center;
  `;
  return (
    <div className='App'>
      <Router>
        <ScrollToTop />
        <Switch>
          <Route exact path='/Chatbot'>
            <MyNewChatBot />
          </Route>
          <Route exact path='/'>
            <Header />
            <HomePage />
            <Fotter />
            <MyNewChatBot />
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

          <Route exact path='/Etanim/0'>
            <Header />
            <InsidePage3 department='איתנים' url='0' />
            <Fotter />
          </Route>
          <Route exact path='/Etanim/1'>
            <Header />
            <InsidePage3 department='איתנים' url='1' />
            <Fotter />
          </Route>
          <Route exact path='/Etanim/2'>
            <Header />
            <InsidePage3 department='איתנים' url='2' />
            <Fotter />
          </Route>
          <Route exact path='/Etanim/3'>
            <Header />
            <InsidePage3 department='איתנים' url='3' />
            <Fotter />
          </Route>
          <Route exact path='/Etanim/4'>
            <Header />
            <InsidePage3 department='איתנים' url='4' />
            <Fotter />
          </Route>
          <Route exact path='/Etanim/5'>
            <Header />
            <InsidePage3 department='איתנים' url='5' />
            <Fotter />
          </Route>
          <Route exact path='/Etanim/6'>
            <Header />
            <InsidePage3 department='איתנים' url='6' />
            <Fotter />
          </Route>
          <Route exact path='/sherotKhelate/0'>
            <Header />
            <InsidePage3 department='שירות קהילתי' url='0' />
            <Fotter />
          </Route>
          <Route exact path='/sherotKhelate/1'>
            <Header />
            <InsidePage3 department='שירות קהילתי' url='1' />
            <Fotter />
          </Route>
          <Route exact path='/sherotKhelate/2'>
            <Header />
            <InsidePage3 department='שירות קהילתי' url='2' />
            <Fotter />
          </Route>
          <Route exact path='/sherotKhelate/3'>
            <Header />
            <InsidePage3 department='שירות קהילתי' url='3' />
            <Fotter />
          </Route>
          <Route exact path='/sherotKhelate/4'>
            <Header />
            <InsidePage3 department='שירות קהילתי' url='4' />
            <Fotter />
          </Route>
          <Route exact path='/sherotKhelate/5'>
            <Header />
            <InsidePage3 department='שירות קהילתי' url='5' />
            <Fotter />
          </Route>
          <Route exact path='/sherotKhelate/6'>
            <Header />
            <InsidePage3 department='שירות קהילתי' url='6' />
            <Fotter />
          </Route>
          <Route exact path='/sherotKhelate/7'>
            <Header />
            <InsidePage3 department='שירות קהילתי' url='7' />
            <Fotter />
          </Route>
          <Route exact path='/sherotKhelate/8'>
            <Header />
            <InsidePage3 department='שירות קהילתי' url='8' />
            <Fotter />
          </Route>
          <Route exact path='/sherotKhelate/9'>
            <Header />
            <InsidePage3 department='שירות קהילתי' url='9' />
            <Fotter />
          </Route>

          <Route exact path='/aher/0'>
            <Header />
            <Noseem department='מרכז מיצוי זכוית' url='0' />
            <Fotter />
          </Route>

          <Route exact path='/aher/1'>
            <Header />
            <Noseem department='פניות הציבור' url='1' />
            <Fotter />
          </Route>
          <Route exact path='/aher/2'>
            <Header />
            <Noseem department='אגוד ידידים' url='2' />
            <Fotter />
          </Route>

          <Route exact path='/aher/3'>
            <Header />
            <Noseem department='תרומות' url='3' />
            <Fotter />
          </Route>
          <Route exact path='/aher/4'>
            <Header />
            <Noseem department='ועד משפחות' url='4' />
            <Fotter />
          </Route>
          <Route exact path='/aher/5'>
            <Header />
            <Noseem department='מתנדבים במרכז' url='5' />
            <Fotter />
          </Route>

          <Route exact path='/aher/6'>
            <Header />
            <Noseem department='פר"א' url='6' />
            <Fotter />
          </Route>

          <Route exact path='/aher/7'>
            <Header />
            <Noseem department='שירות סוציאלי' url='7' />
            <Fotter />
          </Route>

          <Route exact path='/aher/8'>
            <Header />
            <Noseem department='שירות פסיכולוגי' url='8' />
            <Fotter />
          </Route>

          <Route exact path='/aher/9'>
            <Header />
            <Noseem department='ריפוי בעיסוק' url='9' />
            <Fotter />
          </Route>

          <Route exact path='/aher/10'>
            <Header />
            <Noseem department='תזונת ודיאטה' url='10' />
            <Fotter />
          </Route>

          <Route exact path='/OurCenter'>
            <Header />
            <Updating />
            <Fotter />
          </Route>
          <Route exact path='/aher/11'>
            <Header />
            <Noseem department='קבלת חולים' url='11' />
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

          <Route exact path='/Gallery'>
            <Header />
            <Photos />
            <Fotter />
          </Route>
          <Route exact path='/map'>
            <Header />
            <Googlemap details={details1} />
            <Fotter />
          </Route>
          <Route exact path='/map1'>
            <Header />
            <Googlemap2 />
            <Fotter />
          </Route>
          <Route exact path='/Videos'>
            <Header />
            <Videos />
            <Fotter />
          </Route>

          <Route exact path='/NewsList'>
            <Header />
            <AllNewsPage />
            <Fotter />
          </Route>

          <Route exact path='/News/:id'>
            <Header />
            <NewsPagebyid />
            <Fotter />
            <MyNewChatBot />
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
            path='/Admin/EditNews/:id'
            component={AdminEditNews1}
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
          <ProtectedRoute
            exact
            path='/Admin/AdminEditDoctors'
            component={AdminEditDoctors}
          />

          <ProtectedRoute
            exact
            path='/Admin/AddChatBot'
            component={AdminAddChatBotQuestion}
          />

          <ProtectedRoute
            exact
            path='/Admin/AdminAddDoctors/AddDoctors'
            component={AddDoctors}
          />
          <ProtectedRoute
            exact
            path='/Admin/AdminResearch'
            component={AdminResearch}
          />
          <ProtectedRoute
            exact
            path='/Admin/AdminResearch/AddResearch'
            component={AdminAddResearch}
          />

          <Route exact path='/Search/:stringToSearch'>
            <Header />
            <Search />
            <Fotter />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
