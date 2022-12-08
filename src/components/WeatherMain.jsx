import React from 'react'

function WeatherMain({ responseWeather }) {
    return (
        <div>
            <div>{responseWeather?.location.name}</div>
            <div>{responseWeather?.location.country}</div>
            <div>
                <div>
                    <img src={`http:${responseWeather?.current.condition.icon}`}
                        width="128"
                        alt={responseWeather?.current.condition.text} />
                </div>
            </div>
            <div>
                <div>
                    {responseWeather?.current.condition.text}
                </div>
                <div>
                    {responseWeather?.current.temp_c}°
                </div>
                <iframe src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d426063.2829184074!2d${responseWeather?.location.lon}!3d${responseWeather?.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2scl!4v1670432593680!5m2!1ses!2scl`} width="400" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div >
    )
}

export default WeatherMain