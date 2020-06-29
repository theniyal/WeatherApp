import React, { Component} from 'react'
import Titles from './components/Titles'
import Form from './components/Form'
import Weather from './components/Weather'
import './App.css'

const API_KEY = "21f6906b9e0f516bce8f2723bf5a7686";

class App extends Component {
  state = {
    city: null,
    country: null,
    temperature: null,
    humidity: null,
    description: null,
    error: null
  }
  getWeather = async (e) => {
      e.preventDefault();
      const city = e.target.elements.city.value
      const country = e.target.elements.country.value
      const api_call = await fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+","+country+"&appid=" + API_KEY+"&units=metric");
      const data = await api_call.json()
     
      if(city && country)
      {
        this.setState({
          city: data.name,
          country: data.sys.country,
          temperature: data.main.temp,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          error: null
        })
      }
      else
      {
        this.setState({
          city: undefined,
          country: undefined,
          temperature: undefined,
          humidity: undefined,
          description: undefined,
          error: "Please enter the values."
        })
      }
  }
  render(){
   
    return (
      <div className="box">
        <Titles />
        <Form getWeather = {this.getWeather} />
        <Weather state={this.state}/>
      </div>
    );
  }
}

export default App;
