import React, {Component} from 'react';
import ReactDOM from 'reactDOM';
import './index.css';

// state
// lifecycle event
// UI

class App extends Component {
  render(){
    return (
      <div>
        Hello World!
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
