import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Courses from './Components/Courses/Courses';
import AboutUs from './Components/About-Us/AboutUs';
import Contact from './Components/Contact/Contact';
import Notfound from './Components/NotFound/Notfound';


function App() {
  return (
    <div>
      <Router>
      <Header></Header>
     
      <Switch>
        <Route exact path='/'>
        <Home></Home>
        </Route>
        <Route exact path='/Home'>
        <Home></Home>
        </Route>
        <Route exact path='/Courses'>
          <Courses></Courses>
        </Route>
        <Route exact path='/AboutUs'>
        <AboutUs></AboutUs>
        </Route>
        <Route exact path='/Contact'>
        <Contact></Contact>
        </Route>
        <Route exact path='*'>
          <Notfound></Notfound>
          </Route>
        </Switch>
      <Footer></Footer>
      </Router>
      
      
      
    </div>
  );
}

export default App;
