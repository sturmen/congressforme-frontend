import Inferno, {linkEvent} from 'inferno';
import Component from 'inferno-component';

function submit(instance) {
    if (instance.state.invalidZip) {
        instance.setState({
            invalidZip: false
        })
    }
    let zipcode = instance.state.zip;
    var isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zipcode);
    if (isValidZip) {
        instance.props.onButtonPress(zipcode);
    } else {
        instance.setState({
            invalidZip: true
        })
    }
}

function handleInput(instance, event) {
    instance.setState({
        zip: event.target.value,
        invalidZip: false
    })
}

function handleClick(instance, event) {
    submit(instance)
}

function handleKeyUp(instance, event) {
    if (event.keyCode === 13) {
        submit(instance)
    }
}

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            zip: null,
            invalidZip: false
        }
    }
    render() {
        let errormsg = null
        if (this.state.invalidZip) {
            errormsg = <div>INVALID ZIP</div>;
        } else {
            errormsg = <div></div>
        }
        return (
        <div>
        <input
            type="text"
            placeholder="zip code"
            value={this.state.zip}
            onInput={ linkEvent(this, handleInput) }
            onKeyUp={ linkEvent(this, handleKeyUp) }
        />
        <input type="button" onClick={ linkEvent(this, handleClick) } value="Submit" />
        {errormsg}
        </div>
        );
    }
}

export default SearchBar;