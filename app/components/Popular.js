
var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');
// require('./index.css');

class Popular extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      selectedLanguage: 'All'
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage(lang) {
    this.setState(function(){
      return {
        selectedLanguage: lang
      }
    })
  }

  render() {
    const languages = ['All', 'JavaScript', 'Ruby' ,'Java', 'CSS', 'Python'];

    let list = languages.map(function(language) {
      return (
      <li
        style={language === this.state.selectedLanguage ? { color: '#d0021b'}: null }
        onClick={this.updateLanguage.bind(null, language)}
        key={language}>
        {language}
      </li>
      )
    }, this)

    return (
      <div>
        <p>Selected Language: {this.state.selectedLanguage}</p>
        <ul className="languages">
          {list}
        </ul>
      </div>
    )
  }
}

export default Popular;

// Badge.propTypes = {
//   name: PropTypes.string.isRequired,
//   username: PropTypes.string.isRequired,
//   img: PropTypes.string.isRequired
// }
