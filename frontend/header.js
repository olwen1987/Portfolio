var React = require('react/addons'),
  Router = require('react-router'),
  NavigationPanel = require('./navigation-panel'),
  RouteHandler = Router.RouteHandler;

var Header = React.createClass({
  render: function() {
    return (<div id="header">
      <span className="header-page-title">AARON O. PINTO</span>
      <NavigationPanel className="header-nav-options"/>
    </div>)
  }
});

module.exports = Header;