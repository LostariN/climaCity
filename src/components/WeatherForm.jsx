import React, { useState, useEffect } from 'react'

function WeatherForm({ onChangeCity }) {
    const [city, setCity] = useState('')
    // const [cargarSelectData, setCargarSelectData] = useState([])

    // useEffect(() => {
    //     ciudadesSelect()
    // }, [])

    function handleOnChange(e) {
        const valor = e.target.value;

        if (valor !== ' ') {
            setCity(valor)
        }
    }
    function handleOnSubmit(e) {
        e.preventDefault()
        onChangeCity(city)
    }

    // async function ciudadesSelect() {
    //     const token = 'bmX8a93PFKmQAL0mzdena4QZ0ReqoUn1gpt3o4utzaRDE_ED_g2mn2w';
    //     const url = 'https://www.universal-tutorial.com/api/getaccesstoken'

    //     const urlCities = 'https://www.universal-tutorial.com/api/countries/'

    //     // try {
    //     // const resp = await fetch(url, {
    //     //     method: 'GET',
    //     //     headers: {
    //     //         "Accept": "application/json",
    //     //         "api-token": `${token}`,
    //     //         "user-email": "dcbelca@gmail.com"
    //     //     }
    //     // })
    //     // const dataToken = await resp.json()

    //     // const respCities = await fetch(urlCities, {
    //     //     method: 'GET',
    //     //     headers: {
    //     //         "Authorization": `${dataToken.auth_token}`,
    //     //         "Accept": "application/json",
    //     //     }
    //     // })
    //     // const key = '311877151496dabe9f5d187c341fe51c'
    //     // const urlAuth = `http://api.countrylayer.com/v2/all?access_key=${key}`

    //     // try {
    //     //     const response = await fetch(urlAuth)
    //     //     const dataToken = await response.json()
    //     //     setCargarSelectData(dataToken)
    //     // } catch (error) {
    //     //     console.log(error);
    //     // }
    //     // const dataCities = await respCities.json();
    //     // setCargarSelectData(dataCities);

    //     // } catch (error) {

    //     // }
    // }
    // console.log(cargarSelectData);

    return (
        <form onSubmit={handleOnSubmit}>
            <input type="text" onChange={handleOnChange} />

            {/* <select>
                {cargarSelectData.map((option) => (
                    <option key={option.name} value={option.name}>{option.name}</option>
                ))}
            </select> */}
            <button className='rounded text-white'>Buscar</button>
        </form>
    )
}

export default WeatherForm
