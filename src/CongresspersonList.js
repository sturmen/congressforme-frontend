import Inferno from 'inferno';
import Component from 'inferno-component';
import BioBlock from './BioBlock';

class CongressPersonList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            legislators: []
        };
    }

    updateState(json) {
        this.setState({
            legislators: json.legislators,
            waitingForNetwork: false
        });
    }

    makeRequest(url) {
        this.setState({
            waitingForNetwork: true
        })
        return fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            console.log(json);
            this.updateState(json);
        }).catch((err) => {
            console.log(err);
        });
    }

    componentWillReceiveProps (nextProps) {
        let baseUrl = 'api/v1/zip/';        
        this.makeRequest(baseUrl + nextProps.zip);
    }

    render () {
        let contents;
        if (this.state.waitingForNetwork) {
            contents = <div>loading...</div>;
        } else {
            contents = <div></div>;
        }
        return (<div>
            {this.state.legislators.map((legislator) => {
            return (<BioBlock person={legislator} />);
            })}
            {contents}
            </div>)
    }
}
export default CongressPersonList;