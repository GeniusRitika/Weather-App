import axios from 'axios';

const url = "https://api.openweathermap.org/data/2.5/weather";
const apiKey ='2613e54a96a5666f1acf3229f29c4e67';

// Params are placeholders in the URL that begin
// with a colon, like the `:id` param defined in
// the route in this example. A similar convention
// is used for matching dynamic segments in other
// popular web frameworks like Rails and Express.

/*Route params are parameters whose values are set dynamically in a page's URL. 
This allows a route to render the same component while passing that component the dynamic portion of the URL, 
so that it can change its data based on the parameter*/

const fetchWeather = async (city) => {
    const { data } = await axios.get(url,{
        params: {
            q: city,
            units: 'metric',
            apiKey: apiKey
        }
    });
    return data;
}

export default fetchWeather;

/*async fetchWeather(city)
{
    const {data} = await axios.get(url);
    return data;
}*/