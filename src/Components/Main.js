import { FcGlobe } from 'react-icons/fc'
// import { BsSearch } from 'react-icons/bs'
import { useState,useEffect } from 'react'
import axios from 'axios';
import React from 'react';
import WeatherCard from './WeatherCard';

const API_KEY = '82845d3c2dd3471fb0b8b9bec40b75a0';

export const context = React.createContext();
export default function Main() {

    const [city, setCity] = useState('ahmedabad')
    const [weather, setWeather] = useState()
    const handleChange = async () => {
        setCity(city)
        const data = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
            .catch(e => console.log('please write proper name', e));
        console.log(data.data)
        setWeather(data.data)
    }
    useEffect(()=>{
        handleChange();
    },[])
    return (
        <context.Provider value={weather}>
            <div className="flex flex-col justify-center items-center sm:flex-row sm:justify-between w-screen p-4 px-5 bg-red-100 shadow-xl">
                <div className='inline-flex items-center'>
                    <FcGlobe className='text-4xl' />
                    <h1 className='text-2xl font-serif font-semibold ml-3 '>Weather Buddy</h1>
                </div>
                <div className='sm:mr-10 mt-5 sm:mt-0'>
                    <form className=' flex flex-col items-center justify-center space-y-5 sm:block sm:space-y-0' onSubmit={(e)=>e.preventDefault()}>
                            <input list='cityList' className='p-2 rounded-full outline-none' placeholder='Enter City' value={city} onChange={e => setCity(e.target.value)} />
                        <button className='px-6 py-2 bg-blue-500 text-white rounded-full font-serif font-semibold text-md border border-gray-700
                    ml-2 hover:bg-white hover:text-blue-500 transition-colors delay-150'
                            onClick={handleChange} >
                            Search
                        </button>
                    </form>
                </div>
            </div>
            <WeatherCard />
        </context.Provider>
    )
}