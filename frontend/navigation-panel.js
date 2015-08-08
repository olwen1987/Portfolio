var React = require('react/addons'),
  _ = require('lodash'),
  NavPanelRow = require('./nav-panel-row');
var options = [{name: 'Home', route: 'home'}, {name: 'Education', route: 'education'}, {
  name: 'Skills', route: 'skills'}, {name: 'Projects', route: 'projects'}, {name: 'Contact Me', route: 'contact'}];
var NavigationalPanel = React.createClass({
  render: function() {
    return (<div id={this.props.className}>
      {this.renderNavPanelRows()}
    </div>)
  },
  renderNavPanelRows: function() {
    return _.map(options, function(row) {
      return <NavPanelRow option={row}/>
    })
  }
});

module.exports = NavigationalPanel;
