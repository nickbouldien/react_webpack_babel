
var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');
require('./index.css');
import Popular from './components/Popular';
import Home from './components/Home';
var Nav = require('./components/Nav');
var Battle = require('./components/Battle')

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <h1>hello</h1>
          <Nav />
          <Route exact path="/" component={Home} />
          <Route exact path="/popular" component={Popular} />
          <Route exact path="/battle" component={Battle} />

        </div>

      </Router>

    )
  }
}

export default App;
