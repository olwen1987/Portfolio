var React = require('react/addons'),
  Navigation = require('react-router').Navigation,
  State = require('react-router').State,
  cx = React.addons.classSet;


var NavPanelRow = React.createClass({
  mixins: [Navigation, State],
  _handleNavPanelRowClick: function() {
    this.transitionTo(this.props.option.route, this.getParams(), this.getQuery());
  },
  render: function() {
    var className = cx({
      active:this.getPathname() == '/'+this.props.option.route
    });
    return (<span id="nav-panel-row" onClick={this._handleNavPanelRowClick} className={className}>
      {this.props.option.name}
    </span>)
  }
});

module.exports = NavPanelRow;
