import React, { useState } from "react";

const WeatherApp = () => {
  let apiKey = "e1ed3becf7143f7ed0d1be26c9f8efae";
  let weatherApi = "https://api.openweathermap.org/data/2.5/weather";
  let latAndLon = "http://api.openweathermap.org/geo/1.0/direct";
  let lat;
  let lon;

  const [temprature,setTemprature] = useState();
  const [humidity, setHumidity] = useState()
  const [name, setName] = useState()

  

  function submitHandler(event) {
    event.preventDefault();
    let city = event.target.city.value;
    console.log(city);

    async function findWeather() {
       
      let response = await fetch(
        `${weatherApi}?lat=${lat}&lon=${lon}&appid=${apiKey}`
      );
      let data = await response.json();
   
      setTemprature(data.main.temp-273.15)
      setHumidity(data.main.humidity)
      setName(data.name)

    }

    async function findLatLon() {
      let response = await fetch(`${latAndLon}?q=${city}&appid=${apiKey}`);
      let data = await response.json();
      lat = data[0].lat;
      lon = data[0].lon;
      findWeather();
      console.log(lat, lon);
    }

    findLatLon();
  }

  return (
    <div>
      <h1>WeatherApp</h1>

      <form onSubmit={submitHandler}>
        <input name="city" />
        <button type="submit">Search</button>
      </form>
    <h1>City Name  : {name}</h1>
      <p>Temprature : {temprature}<sup>0</sup>C</p>
      <h2>Humidity : {humidity}</h2>
    </div>
  );
};

export default WeatherApp;
