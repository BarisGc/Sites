import React, { Fragment, useState } from 'react';
import Select from 'react-select';
import { sehirler } from '../../../data/city_list_array';
import { useLocationInfo } from '../../context/LocationContex'
import styles from './LocationSelectionDropdown.module.css'

function LocationSelectionDropdown() {

    const { locationName, currentLocationCoord, currentLocationCoordStatus, setLocationName, } = useLocationInfo()
    const [defaultLocation, setDefaultLocation] = useState({ value: locationName, label: locationName });
    
    // console.log("locationName", locationName)
    // console.log("defaultLocation", defaultLocation)

    function setLocationNameFunc(object) {
        setLocationName(object.value)
    }

    return (
        <Fragment >
            <div className={styles.app}>
                <h1>Weather App</h1>
                <Select
                    className={styles.select}
                    classNamePrefix="select"
                    defaultValue={defaultLocation}
                    name="city"
                    options={sehirler}
                    onChange={setLocationNameFunc}
                />
                <h2> Your Coordinates</h2>
                <p>{currentLocationCoordStatus}</p>
                {currentLocationCoord && <p>Latitude: {currentLocationCoord.lat}</p>}
                {currentLocationCoord && <p>Longitude: {currentLocationCoord.lon}</p>}
            </div>
        </Fragment>
    );
}

export default LocationSelectionDropdown