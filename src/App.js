import React, { Component } from "react";
import * as styles from "./App.module.scss";
import * as actions from "./redux/actions/action";
import { connect } from "react-redux";

class App extends Component {
  inputHandler = (event) => {
    const value = event.target.value;
    this.props.onCityNameUpdate(value);
    console.log(value);
  };

  weatherSearcher = () => {};

  render() {
    console.log(this.props);
    return (
      <div className={styles.App}>
        <h1>Use Open weather Api and the data for any city input</h1>
        <section className={styles.form}>
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">City Name</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter City Name"
                onChange={(e) => this.inputHandler(e)}
                value={this.props.cityName}
              />
              <small id="emailHelp" className="form-text text-muted">
                Enter the city name you want to search weather of.
              </small>
            </div>

            <button
              type="button"
              className="btn btn-primary"
              onClick={() => this.props.onCallWeatherApi(this.props.cityName)}
            >
              Search Weather
            </button>
          </form>
        </section>
        <section className={styles.weather}>
          <p>
            Name of City: <span>{this.props.name}</span>
          </p>
          <p>
            Temp: <span>{this.props.temperature}</span>
          </p>
          {/* Feels_like: <span></span> */}
          <p>
            Temp_min:
            <span>{this.props.temp_min}</span>
          </p>
          <p>
            Temp_max: <span>{this.props.temp_max}</span>
          </p>
          <p>
            Pressure: <span>{this.props.pressure}</span>
          </p>
          <p>
            Humidity: <span>{this.props.humidity}</span>
          </p>

          {/* <p>Name : <span></span></p>
          <p>Name : <span></span></p> */}
        </section>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCallWeatherApi: (cityName) => dispatch(actions.weatherFinder(cityName)),

    onCityNameUpdate: (cityName) => dispatch(actions.cityNameUpdate(cityName)),
    // onErrorInApi: (cityName) =>
    // dispatch(actions.storeWeatherData(cityName)),
  };
};

const mapStateToProps = (state) => {
  return {
    cityName: state.weather.cityName,
    name: state.weather.name,
    temperature: state.weather.temperature,
    pressure: state.weather.pressure,
    humidity: state.weather.humidity,
    feels_like: state.weather.feels_like,
    coordinates: state.weather.coordinates,
    temp_min: state.weather.temp_min,
    temp_max: state.weather.temp_max,
    errorMsg: state.weather.errorMsg,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
