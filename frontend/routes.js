var  React = require('react'),
  App = require('./app'),
  Home = require('./home'),
  Education = require('./education'),
  Skills = require('./skills'),
  Projects = require('./projects'),
  ContactMe = require('./contact-me'),
  Router = require('react-router'),
  Route = Router.Route;

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="home" path="/home" handler={Home}/>
    <Route name="education" path="/education" handler={Education}/>
    <Route name="skills" path="/skills" handler={Skills}/>
    <Route name="projects" path="/projects" handler={Projects}/>
    <Route name="contact" path="/contact" handler={ContactMe}/>
  </Route>
);

module.exports = routes;