var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');


var Timer = React.createClass({
  getInitialState: function() {
    return {
      count: 0,
      countupStatus: 'stopped'
    }
  },
  componentDidUpdate: function(prevProps, prevState) {
    if (this.state.countupStatus !== prevState.countupStatus) {
      switch(this.state.countupStatus) {
        case 'started':
          this.handleStart();
          break;
        case 'stopped':
          this.setState({count: 0});
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  },
  componentWillUnmount: function() {
    clearInterval(this.timer);
  },
  handleStart: function() {
    this.timer = setInterval(()=> {
      this.setState({
        count: this.state.count + 1
      });
    },1000);
  },
  handleStatusChange: function(newTimerStatus) {
    this.setState({countupStatus: newTimerStatus});
  },
  render: function() {
    var {count, countupStatus} = this.state;
    return (
      <div>
        <h1 className="page-title">Timer App</h1>
        <Clock totalSeconds={count}/>
        <Controls countdownStatus={countupStatus} onStatusChange={this.handleStatusChange}/>
      </div>
    )
  }
});

module.exports = Timer;