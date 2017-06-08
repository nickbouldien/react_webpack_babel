
var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');
require('./index.css');
import Popular from './components/Popular';
import Home from './components/Home';
import Results from './components/Results';
var Nav = require('./components/Nav');
var Battle = require('./components/Battle')

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/popular" component={Popular} />
            <Route exact path="/battle" component={Battle} />
            <Route path="/battle/results" component={Results} />
            <Route render={function(){
              return <p>404... Page Not Found</p>
            }} />
          </Switch>

        </div>

      </Router>

    )
  }
}

export default App;
