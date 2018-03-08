var React = require('react');
var Link = require('react-router').Link;
var IndexLink = require('react-router').IndexLink;

var Nav = React.createClass({

  render: function() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">
              <Link to="/">React Timer App</Link>
            </li>
            <li>
              <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
            </li>
            <li>
              <Link to="/countdown" activeClassName="active-link">Countdown</Link>        
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">
              Created by <a href="http://andrewwoo.me" target="_blank">Andrew</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
});

module.exports = Nav;