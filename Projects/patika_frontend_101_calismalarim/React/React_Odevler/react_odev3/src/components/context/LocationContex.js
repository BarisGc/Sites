import { createContext, useState, useEffect, useContext } from 'react'
import axios from "axios";

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
    const [locationCoord, setLocationCoord] = useState()
    const [locationName, setLocationName] = useState()
    const [currentLocationCoord, setCurrentLocationCoord] = useState()
    const [currentLocationCoordStatus, setCurrentLocationCoordStatus] = useState(null);
    const [locationData, setLocationData] = useState()

    useEffect(() => {
        getLocation().then(res => {
            getCityNameByCurrentCoords(res)
                .then(res => {
                    setLocationName(res.data.data[0].region)
                })
        })

    }, [])

    // GeoLocation API
    const getLocation = () => {
        return new Promise((resolve, reject) => {
            if (!navigator.geolocation) {
                setCurrentLocationCoordStatus('Geolocation is not supported by your browser');
            } else {
                setCurrentLocationCoordStatus('Locating...');
                navigator.geolocation.getCurrentPosition((position) => {
                    setCurrentLocationCoordStatus(null);
                    setCurrentLocationCoord({ "lat": position.coords.latitude, "lon": position.coords.longitude })
                    resolve({ "lat": position.coords.latitude, "lon": position.coords.longitude })
                }, () => {
                    setCurrentLocationCoordStatus('Unable to retrieve your location');
                    reject("GetLocation Başarısız")
                });
            }
        })

    }

    function getCityNameByCurrentCoords(currentLocationCoord) {
        return new Promise(async (resolve, reject) => {
            if (currentLocationCoord) {
                const cityNameByCurrentLocation = axios(`http://api.positionstack.com/v1/reverse?access_key=5510e8ea6ee6618565ed9ff8fb7f7cd7&query=${currentLocationCoord.lat},${currentLocationCoord.lon}`)
                resolve(cityNameByCurrentLocation)
            } else {
                reject("-City Name- parametresi Positionstack Map Api'den çekilemedi veya bekleniyor")
            }
        })
    }

    const getDataByName = (locationName) => {
        return new Promise(async (resolve, reject) => {
            if (locationName) {
                const dataByName = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${locationName}&appid=3dc94d333e94c0789ebdbc759328a830`)
                resolve(dataByName)
            }
            else {
                reject("-Location Name- paremetresi Openweathermap Api'den çekilemedi veya bekleniyor")
            }
        })
    }

    async function processData() {
        try {
            const apiLocationDataForLocationCoord = await getDataByName(locationName);
            setLocationCoord(apiLocationDataForLocationCoord.data.coord)
            const apiLocationDataForLocationData = await getDataByCoord(apiLocationDataForLocationCoord.data.coord);
            setLocationData(apiLocationDataForLocationData.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        processData();
    }, [locationName])

    function getDataByCoord(locationCoord) {
        return new Promise(async (resolve, reject) => {

            if ((locationCoord)) {
                const dataByCoord = await axios(`https://api.openweathermap.org/data/2.5/onecall?lat=${locationCoord.lat}&lon=${locationCoord.lon}&exclude=minutely,hourly,alerts&units=metric&appid=3dc94d333e94c0789ebdbc759328a830`)
                resolve(dataByCoord)
            }
            else {
                reject("locationCoord yanlış veya yok")
            }
        })
    }

    const values = {
        locationName,
        locationCoord,
        locationData,
        currentLocationCoord,
        currentLocationCoordStatus,
        setLocationName,
        setLocationCoord,
        setLocationData,
        setCurrentLocationCoord,
        setCurrentLocationCoordStatus,
    };

    return <>
        {locationData ? <LocationContext.Provider value={values}>{children}</LocationContext.Provider> : ""}
    </>
}

export const useLocationInfo = () => useContext(LocationContext)

// export {useTheme, ThemeProvider} da kullanılabilir.