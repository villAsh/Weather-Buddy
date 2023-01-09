
export default function WeatherInfo({text,logo,value}) {
    return (
        <div className='flex items-center space-x-3'>
            <h1>{logo}</h1>
            <h1 className="text-lg font-serif"> {value} | {text}</h1>
        </div>
    )
}