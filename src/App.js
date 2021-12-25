import React from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ProductPage from "./pages/ProductPage";
import DetailPage from "./pages/DetailPage";
import ContactPage from "./pages/ContactPage";


function App() {
  return (
    <Router>
        <NavBar/>
        <Switch>
          <Route exact path='/'><HomePage/></Route>
          <Route path='/product'><ProductPage/></Route>
          <Route path='/about'><AboutPage/></Route>
          <Route path='/detail/:id/title/:title'><DetailPage/></Route>
          <Route path='/contact'><ContactPage/></Route>
        </Switch>
        <Footer/>
    </Router>
  );
}

export default App;
