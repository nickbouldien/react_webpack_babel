var React = require('react');
var Link = require('react-router-dom').Link;


class Home extends React.component {
  render(){

    render(

      <div className="home-container" >
        <h1>Github battle: Battle your friends</h1>
        <Link className="button" to="/battle">Battle</Link>


      </div>

    )

  }
}
