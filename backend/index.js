const axios = require("axios");
const WEATHER_API_KEY = "9f733f7d19158d1f8357df5ced5c17a5"; // Replace with actual API key

const getWeather = async (stationName) => {
    try {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${stationName}&appid=${WEATHER_API_KEY}&units=metric`
        );

        console.log({
            temperature: response.data.main.temp,
            condition: response.data.weather[0].description,
        });
        
        return {
            temperature: response.data.main.temp,
            condition: response.data.weather[0].description,
        };
    } catch (error) {
        console.error(`Error fetching weather for ${stationName}:`, error);
        return { temperature: "N/A", condition: "N/A" };
    }
};

getWeather("boisar")