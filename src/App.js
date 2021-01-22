import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Courselist from './TvSeriesList';
import Card from './Card';
import AddCourse from './AddTvseries';
import Addtopic from './AddGenre';
import NavBar from './Navbar';
import Footer from './Footer';
const App = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Courselist} />
        <Route exact path="/card" component={Card} />
        <Route exact path="/course" component={AddCourse} />
        <Route exact path="/topic" component={Addtopic} />
        <Redirect to = "/"></Redirect>
      </Switch>
      <Footer />
    </>
    
  );
}

export default App;
