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
var PropTypes = require('prop-types');
require('./index.css');
import Badge from '../routes/Badge';

class App extends React.Component {
  render() {
    return (
      <div>Hello World!

        <Badge
          name="nick"
          username="utvol"
          img="image.png"
        />

      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

// App.propTypes = {
//   list: PropTypes.array.isRequired
// }
