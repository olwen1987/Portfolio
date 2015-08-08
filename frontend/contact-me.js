var React = require('react/addons'),
  Router = require('react-router'),
  RouteHandler = Router.RouteHandler;

var Home = React.createClass({
  render: function() {
    return (<div id="home-page">
    Contact Me
    </div>)
  }
});

module.exports = Home;