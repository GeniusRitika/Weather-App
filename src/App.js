import React, { useState } from 'react';
import fetchWeather from './api/fetchWeather'; 
import './App.css';


const App = () =>
{
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState({});
    const [invalid, setInvalid] = useState("");

    const search = async (e) =>
    {
        
        try {
            if(e.key === 'Enter' )
            {
                const data = await fetchWeather(city);
                console.log(data);
                setWeather(data);
                setCity("");
                console.log(weather);
            }

            else{
                setWeather("");
            }  
        } 
        catch (error) {
            console.log(error);
            setInvalid("Invalid City Entered");
        }

    }

    const invalidFunc = (e) =>
    {
        if(e.key === "Backspace" || e.key === "Delete")
        {
           setInvalid("");
        }
    }
    
    return(
        <div className="main-container">
                <input 
                    type= "text"
                    placeholder="Enter the city name"
                    className="search"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    onKeyPress={search}
                    onKeyDown={invalidFunc}
                /> 
                <br />
                <div className="invalid">
                    <h2 className="display-invalid">{invalid}</h2>
                </div>

            {
                weather.main && (
                    <div className="city">
                        <h2 className="city-name">
                            <span>{weather.name}</span>
                            <sup>{weather.sys.country}</sup>
                        </h2>

                        <div className="city-temp">
                            {Math.round(weather.main.temp)}
                            <sup>&deg;C</sup>
                        </div> 
                        <div className="info">
                            <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={"city icon"} />
                            <h2 className="description">{weather.weather[0].description}</h2>
                            <h2>Wind Speed : {weather.wind.speed}</h2>
                        </div> 


                    </div>
                )
            }

        </div>
    );
}

export default App;