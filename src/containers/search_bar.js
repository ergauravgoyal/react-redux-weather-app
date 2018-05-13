import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchWeather from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        //debugger;
        this.state = { term: '' };
        //debugger;
        this.onInputChange = this.onInputChange.bind(this); // we are basically oevrriding local method of this
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    onInputChange(event) {
        //debugger;
        //console.log(event.target.value);
        this.setState({
            term: event.target.value
        })
    }
    onFormSubmit(event) {
        event.preventDefault(); // Basically instructs browser not to submit page
        console.log(this.state.term);
        
        this.props.fetchWeather(this.state.term);

        this.setState({
            term: ''
        });
        // We need to go & fetch weather data
    }
    render() {
        return (
            <form className="input-group" onSubmit={this.onFormSubmit}>
                <input placeholder="Get a five day forecast in you favourite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange} />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">
                        Submit
                    </button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    debugger;
    return bindActionCreators({ fetchWeather }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar); //null denotes we dont need state  