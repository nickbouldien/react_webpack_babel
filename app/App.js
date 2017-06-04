
var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');
require('./index.css');
import Badge from './components/Badge';
import Popular from './components/Popular';


class App extends React.Component {
  render() {
    return (
      <div className="container">

        <Popular />

        <Badge
          name="nick"
          username="utvol"
          img="image.png"
        />

      </div>
    )
  }
}

export default App;
