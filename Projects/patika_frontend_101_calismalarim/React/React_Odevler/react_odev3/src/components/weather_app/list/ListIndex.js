/* eslint-disable jsx-a11y/img-redundant-alt */
import styles from "./styles.module.css"
import { useLocationInfo } from "../../context/LocationContex"

function ListIndex() {

    const { locationData } = useLocationInfo()

    // console.log("children component:", "1 locationName", locationName, "2 locationCoord", locationCoord, "3 locationData", locationData)

    function tempRoundToOne(num) {
        return +(Math.round(num + "e+0") + "e-0");
    }

    return (
        <div>
            <ul className={styles.weatherApiListUlDom}>
                <li className={styles.CurrentDayLIDOM} >
                    <div>{locationData.current.dt ? `
                        ${['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][new Date(new Date(locationData.current.dt * 1000).toDateString()).getDay()]}`
                        : ""}<span> (Today)</span></div>
                    <div><img src={`https://openweathermap.org/img/wn/${locationData.current.weather[0].icon}@2x.png`} alt="weather description photo" /></div>
                    <div>{locationData.current.weather[0].description}</div>
                    <div>{`${tempRoundToOne(locationData.current.temp)}°`}</div>
                </li>

                {locationData.daily.slice(1).map((dayNumber, index) => (
                    <li key={index} >
                        <div>{dayNumber.dt ? ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][new Date(new Date(dayNumber.dt * 1000).toDateString()).getDay()] : ""}</div>
                        <div><img src={`https://openweathermap.org/img/wn/${dayNumber.weather[0].icon}@2x.png`} alt="Buraya hava durumu resmi gelecek" /></div>
                        <div>{dayNumber.weather[0].description}</div>
                        <div>{`${tempRoundToOne(dayNumber.temp.max)}°`} <span> / </span><span>{`${tempRoundToOne(dayNumber.temp.min)}°`}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ListIndex
