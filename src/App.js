import Inferno from 'inferno';
import Component from 'inferno-component';
import Logo from './logo';
import './App.css';
import CongressPersonList from './CongresspersonList'
import SearchBar from './SearchBar'

class App extends Component {

  constructor(props) {
    super(props);
    this.updateZipcode = this.updateZipcode.bind(this); // linkevent?
  }

  updateZipcode(zipCode) {
    this.setState({
      zip: zipCode
    });
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Logo width="80" height="80"/>
          <h2>Find Your Legislators</h2>
        </div>
        <SearchBar onButtonPress={this.updateZipcode} />
        <CongressPersonList zip={this.state.zip} />
        <div className="App-footer">
          <a href="mailto:contact@congressfor.me">contact site author</a>
        </div>
      </div>
    );
  }
}

export default App;
