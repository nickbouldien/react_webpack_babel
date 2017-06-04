
var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');
require('./index.css');
import App from './App';

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

// App.propTypes = {
//   list: PropTypes.array.isRequired
// }
