
var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');
require('./index.css');
import Badge from './components/Badge';
import Popular from './components/Popular';
// import Nav from './components/Nav';
var Nav = require('./components/Nav')

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">

          <Nav />
          <Route exact path="/popular" component={Popular} />

          {/* <Badge
            name="nick"
            username="utvol"
            img="image.png"
          /> */}

        </div>

      </Router>

    )
  }
}

export default App;
