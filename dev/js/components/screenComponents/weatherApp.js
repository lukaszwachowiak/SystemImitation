import React, {Component} from "react";

export default class WeatherApp extends Component {
    constructor(props){
        super(props);
        this.state = {
            weather: false,
        };
    }

    componentDidMount() {
        fetch(
            // `https://api.openweathermap.org/data/2.5/weather?q=${this.state.cityName}&APPID=63331c4f9b8a91f9f17ac1580ef2b545`
            `https://api.openweathermap.org/data/2.5/weather?q=Wroclaw&APPID=63331c4f9b8a91f9f17ac1580ef2b545`
        )
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({weather: data})
                }
            )
            .catch(err => {
            console.log(err);
        });
    }

    render(){
        return this.state.weather ? <div>{this.state.weather.clouds.all}</div> : null;
    }
}

// {
// "coord":{"lon":17.03,"lat":51.1},
// "weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],
// "base":"stations",
// "main":{"temp":300.13,"pressure":1015,"humidity":42,"temp_min":297.59,"temp_max":302.59},
// "visibility":10000,
// "wind":{"speed":2.1,"deg":170},
// "clouds":{"all":0},
// "dt":1563626687,
// "sys":{"type":1,"id":1715,"message":0.0062,"country":"PL","sunrise":1563591583,"sunset":1563648978},
// "timezone":7200,
// "id":3081368,
// "name":"Wroclaw",
// "cod":200
// }