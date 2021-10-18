import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Services from './Pages/Home/Services/Services';
import Clinicians from './Pages/Clinicians/Clinicians';
import Blog from './Pages/Blog/Blog';

function App() {
  return (
    <Router>

      <Header></Header>

      <Switch>

        <Route exact path='/'>
          <Home></Home>
        </Route>

        <Route exact path='/home'>
          <Home></Home>
        </Route>

        <Route exact path="/services">
          <Services></Services>
        </Route>

        <Route exact path="/clinicians">
          <Clinicians></Clinicians>
        </Route>

        <Route exact path="/blog">
          <Blog></Blog>
        </Route>

        <Route path='*'>
          <NotFound></NotFound>
        </Route>

      </Switch>

      <Footer></Footer>
    </Router>
  );
}

export default App;
