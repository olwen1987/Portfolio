var React = require('react'),
  Routes = require('./routes'),
  Router = require('react-router');


Router.run(Routes, function(Handler, state) {
  React.render(<Handler/>, document.body)
});

