import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
// import bgImage from './bgp.jpg';

const API_KEY = process.env.REACT_APP_WEATHER_API;
//always remember to hide api keys

class App extends React.Component{
  state = {
    temperature : undefined,
    city : undefined,
    country : undefined,
    humidity : undefined,
    description : undefined,
    error : undefined,
    suggestion:undefined
  }

  getWeather  = async(e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    //const api_call = await fetch("http://api.openweathermap.org/data/2.5/weather?q=Vancouver,ca&appid=16fd8620e42a29cdbc4b6968556319fc&units=metric");
    const data = await api_call.json();
    if(city&&country){
      console.log(data);
      this.setState({
      temperature : data.main.temp,
      city : data.name,
      country : data.sys.country,
      humidity : data.main.humidity,
      description : data.weather[0].description,
      error : ""
      })
    } else{
      this.setState({
        temperature : undefined,
        city : undefined,
        country : undefined,
        humidity : undefined,
        description : undefined,
        error : "Please enter a valid city or country!"
      })
    };
    if (this.state.temperature > 25) {
      this.setState({
      suggestion:"You are not gonna want to wear a jacket!"
      })}
    else if(this.state.temperature > 10 && this.state.temperature <= 25){
      this.setState({
      suggestion:"A light jacket would be perfect!"
      })}
    else if(this.state.temperature === undefined){
      this.setState({
      suggestion:"No can do!"
      })}
    else{
      this.setState({
      suggestion:"You need some thing heavy to prevent being frozen!"
      })}
  }

  render(){
    return(
      <div>
        <div className="wrapper">
          <div className="main">
            {/* <img src={bgImage} className="bgp" alt="weather" center center no-repeat/> */}
            <div className="container">
              <div className="row">
                <div className="col-5 title-container">
                  <Titles/>
                </div>
                <div className="col-7 title-container">
                  <Form getWeather={this.getWeather}/>
                  <Weather 
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                    suggestion={this.state.suggestion}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;