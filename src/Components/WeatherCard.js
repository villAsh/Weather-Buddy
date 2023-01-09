import { useContext } from 'react';
import { context } from './Main';
import WeatherInfo from './WeatherInfo';

//react icons
import { GiWindSlap } from 'react-icons/gi';
import { BsDroplet, BsSun,} from 'react-icons/bs';
import { IoExitOutline } from 'react-icons/io5'

//Weather Conditions images
import cloudynight from '../icons/cloudy-night.svg'
import cloudy from '../icons/cloudy.svg';
import day from '../icons/day.svg';
import night from '../icons/night.svg';
import perfectDay from '../icons/perfect-day.svg';
import rainNight from '../icons/rain-night.svg';
import rain from '../icons/rain.svg';
import storm from '../icons/storm.svg';
import sunny from '../icons/sunny.svg';
import haze from '../icons/haze.svg';
export default function WeatherCard() {
    const weather = useContext(context);
    
    const isDay = weather?.weather[0].icon?.includes('d')
    const getTime = (timestamp) =>{
        return `${new Date(timestamp * 1000).getHours()} : ${new Date(timestamp * 1000).getMinutes()}`
    }
    

    const Icons = {
        "01d" : sunny,
        "01n" : night,
        "02d" : day,
        "02n" : cloudynight,
        "03d" : cloudy,
        "03n" : cloudy,
        "04d" : perfectDay,
        "04n" : cloudynight,
        "09d" : rain,
        "09n" : rainNight,
        "10d": rain,
        "10n": rainNight,
        "11d" : storm,
        "11n" : storm,
        "50d" : haze
        } 
    // console.log(weather)
    return(
        <div className="flex items-center justify-center w-full min-h-[88vh] bg-gradient-to-br from-blue-300 to-gray-600">
        <div className="border border-white p-5 flex flex-col justify-center items-center w-[40vw] h-[70vh] space-y-4">
            <h1 className="sm:text-xl md:text-3xl font-sans font-semibold text-lime-400">React Weather Buddy</h1>
            <div className='flex flex-col sm:flex-row items-center sm:justify-between sm:space-x-10  text-white'>
                <h1 className="sm:text-3xl">{`${Math.floor(weather?.main.temp) - 273}`} &#8451; <span className="text-2xl">| {weather?.weather[0].description}</span></h1>
                {/* <BsCloudsFill className='text-7xl ml-5' /> */}
                <img src={Icons[weather?.weather[0].icon]} alt="Weather Icon" width={100}/>
            </div>
            <h1 className='text-xl sm:text-4xl text-lime-400'>{weather?.name} , {weather?.sys.country}</h1>
            <h1 className='sm:text-xl text-white font-semibold underline underline-offset-8 decoration-yellow-300'>Weather Info</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 pt-5 text-white'>
                <WeatherInfo value={getTime(weather?.sys[isDay ? "sunset" : "sunrise"])} text={isDay ? "sunset" : "sunrise"} logo={<BsSun className='text-5xl text-orange-300' />}/>
                <WeatherInfo value={weather?.main.humidity} text="Humidity" logo={<BsDroplet className='text-5xl text-blue-600 '/>}/>
                <WeatherInfo value={weather?.wind.speed} text="Wind" logo={<GiWindSlap className='text-5xl text-gray-800'/>}/>
                <WeatherInfo value={weather?.main.pressure} text="pressure" logo={<IoExitOutline className='text-5xl text-red-600'/>}/>
              
            </div>
        </div>
    </div>
    ) 
}