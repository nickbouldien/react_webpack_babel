
var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');
// require('./index.css');

class Badge extends React.Component {
  render() {
    return (
      <div>
        <img
          src={this.props.img}
          alt={this.props.img}
          style={{with:100, height:100}}
        />
        <h1>Name: {this.props.name}</h1>
        <h3>Username: {this.props.username}</h3>
      </div>
    )
  }
}

export default Badge;

Badge.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
}



// Badge.propTypes = {
//   list: PropTypes.arrayOf(PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     friend: PropTypes.bool.isRequired
// }
