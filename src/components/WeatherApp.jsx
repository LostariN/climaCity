import React, { useState, useEffect } from 'react'
import WeatherForm from './WeatherForm'
import WeatherMain from './WeatherMain'
function WeatherApp() {
    const [responseWeather, setResponseWeather] = useState(null)

    useEffect(() => {
        loadInfo('santiago')
    }, [])

    useEffect(() => {
        document.title = `Weather | ${responseWeather?.location.name ?? ""}`
    }, [responseWeather])


    function handleOnChanCity(city) {
        setResponseWeather(null);
        loadInfo(city);
    }
    async function loadInfo(city) {
        try {
            const url = 'http://api.weatherapi.com/v1/current.json?'
            const key = '4138b269c5ea467ca7d150941220512'
            const request = await fetch(`${url}key=${key}&q=${city}&aqi=no`);
            const response = await request.json();
            console.log(response);
            setResponseWeather(response)
        } catch (error) {
            console.log(error);
        }

    }
    return (
        <div>
            <WeatherForm onChangeCity={handleOnChanCity} />
            <WeatherMain responseWeather={responseWeather} />
        </div>
    )
}
export default WeatherApp