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
import Reservation from './Pages/Reservation/Reservation';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import UserInfo from './Pages/UserInfo/UserInfo';

function App() {
  return (
    <div>
      <AuthProvider>
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

            <PrivateRoute exact path="/clinicians">
              <Clinicians></Clinicians>
            </PrivateRoute>

            <PrivateRoute exact path="/blog">
              <Blog></Blog>
            </PrivateRoute>

            <PrivateRoute path="/reservation/:reserveId">
              <Reservation></Reservation>
            </PrivateRoute>

            <Route exact path="/login">
              <Login></Login>
            </Route>

            <Route exact path="/register">
              <Register></Register>
            </Route>

            <Route exact path="/userInfo">
              <UserInfo></UserInfo>
            </Route>

            <Route path='*'>
              <NotFound></NotFound>
            </Route>

          </Switch>

          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
