var React = require('react/addons'),
  Router = require('react-router'),
  RouteHandler = Router.RouteHandler,
  _ = require('lodash');

var skillsList = [
  {name: 'HTML', image: 'html.jpg'},
  {name: 'CSS', image: 'css.jpg'},
  {name: 'JAVASCRIPT', image: 'javascript.png'},
  {name: 'BACKBONE', image: 'backbone.png'},
  {name: 'REACT', image: 'react.png'},
  {name: 'REQUIRE', image: 'require.png'},
  {name: 'JAVA', image: 'java.png'},
  {name: 'LESS', image: 'less.jpg'},
  {name: 'GRUNT', image: 'grunt.png'},
  {name: 'BROWSERIFY', image: 'browserify.jpg'},
  {name: 'WEBPACK', image: 'webpack.jpg'},
  {name: 'BOOTSTRAP', image: 'bootstrap.png'}
];


var Home = React.createClass({
  _renderSkills: function() {
    return _.map(skillsList, function(value) {
      return (
        <div className="skills-items">
          <div className="skills-icon">
            <img src={"../images/"+value.image}/>
          </div>
          <div className="skill-name">{value.name}</div>
        </div>
      )
    })

  },
  render: function() {
    return (<div id="skills-section">
      <div className="section-name">Skills</div>
      <div className="skills-panel">
        {this._renderSkills()}
      </div>
    </div>)
  }
});

module.exports = Home;