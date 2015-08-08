var React = require('react/addons'),
  Router = require('react-router'),
  Header = require('./header'),
  RouteHandler = Router.RouteHandler;

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Header/>
        <div className="content">
          <RouteHandler/>
        </div>
      </div>
    )
  }
});

module.exports = App;