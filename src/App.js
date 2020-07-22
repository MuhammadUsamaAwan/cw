import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./assets/sass/main.scss";
import Fade from "react-reveal/Fade";
import Navbar from "./components/layouts/Navbar";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Contact from "./components/layouts/Contact";
import Premium from "./components/layouts/Premium";
import Punchline from "./components/layouts/Punchline";
import Why from "./components/layouts/Why";
import Discount from "./components/layouts/Discount";
import GetHelp from "./components/layouts/GetHelp";
import Order from "./components/layouts/Order";
import Testimonials from "./components/layouts/Testimonials";
import Free from "./components/layouts/Free";
import Wait from "./components/layouts/Wait";

function App() {
  return (
    <Router>
      <Contact />
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Header />
          <Premium />
          <Punchline />
          <Fade big>
            <Why />
          </Fade>
          <Fade big>
            <Discount />
          </Fade>
          <Fade big>
            <GetHelp />
          </Fade>
          <Fade big>
            <Order />
          </Fade>
          <Fade big>
            <Testimonials />
          </Fade>
          <Fade big>
            <Free />
          </Fade>
          <Fade big>
            <Wait />
          </Fade>
        </Route>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
