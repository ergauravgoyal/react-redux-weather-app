import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import { Sparklines, SparklinesLine } from 'react-sparklines';

class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map((weather) => weather.main.temp);
        console.log(temps);
        const humidity = cityData.list.map((weather) => weather.main.humidity);
        const pressure = cityData.list.map((weather) => (
            weather.main.pressure
        ));

        return (

            <tr key={name}>
                <td>{name}</td>
                <td>
                    <Chart data={temps} color="orange" />
                </td>
                <td>
                    <Chart data={humidity} color="red" />
                </td>

            </tr>
        )
    }
    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps(state) {
    return {
        weather: state.weather
    };
}

export default connect(mapStateToProps)(WeatherList);