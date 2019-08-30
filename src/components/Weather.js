import React from "react";

class Weather extends React.Component{
    render(){
        return(
            <div className="weather">
                {this.props.city && this.props.country && 
                <h1 className="weather-value">Location : 
                    <span className="weather-info">{this.props.city}, {this.props.country}</span>
                </h1>}
                {this.props.temperature && 
                <h1 className="weather-value">Temperature : 
                    <span className="weather-info">{this.props.temperature} ℃</span>
                </h1>}
                {this.props.humidity && 
                <h1 className="weather-value"> Humidity : 
                    <span className="weather-info">{this.props.humidity}</span>
                </h1>}
                {this.props.description && 
                <h1 className="weather-value">Condition  : 
                    <span className="weather-info">{this.props.description}</span>
                </h1>}
                {this.props.error && 
                <h1><span className="weather-error">{this.props.error}</span></h1>}
                <h1><span>{this.props.suggestion}</span></h1>
            </div>
        )
    }
}

export default Weather;