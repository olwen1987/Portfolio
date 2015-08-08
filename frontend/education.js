var React = require('react/addons'),
  Router = require('react-router'),
  RouteHandler = Router.RouteHandler;


var text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

var Home = React.createClass({
  render: function() {
    return (<div id="education-section">
        <div className="section-name">Education</div>
        <div className="education-block block-1">
          <div className="section-name">Masters</div>
          <div className="details">{text}</div>
        </div>
        <div className="education-block block-2">
          <div className="section-name">Bachelors</div>
          <div className="details">{text}</div>
        </div>
      </div>
    )
  }
});

module.exports = Home;