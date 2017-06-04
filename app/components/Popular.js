
var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');


function SelectLanguage(props){
  const languages = ['All', 'JavaScript', 'Ruby' ,'Java', 'CSS', 'Python'];

  return (
    <ul className="languages">
      {languages.map(function(language) {
        return (
        <li
          style={language === props.selectedLanguage ? { color: '#d0021b'}: null }
          onClick={props.onSelect.bind(null, language)}
          key={language}>
          {language}
        </li>
        )
      }, this)}
    </ul>
  )
}


// class SelectLanguage extends React.Component {
//   render(){
//
//     const languages = ['All', 'JavaScript', 'Ruby' ,'Java', 'CSS', 'Python'];
//
//     return (
//       <ul className="languages">
//         {languages.map(function(language) {
//           return (
//           <li
//             style={language === this.props.selectedLanguage ? { color: '#d0021b'}: null }
//             onClick={this.props.onSelect.bind(null, language)}
//             key={language}>
//             {language}
//           </li>
//           )
//         }, this)}
//       </ul>
//     )
//   }
// }

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}


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

    return (
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage}
        />

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
