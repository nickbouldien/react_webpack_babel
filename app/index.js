// import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// // state
// // lifecycle event
// // UI
//
// class App extends Component {
//   render(){
//     return (
//       <div>
//         Hello World!
//       </div>
//     )
//   }
// }
//
// ReactDOM.render(<App />, document.getElementById('app'))


var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

class App extends React.Component {
  render() {
    return (
      <div>Hello World!</div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
