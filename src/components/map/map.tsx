import Map, { GeolocateControl, Marker, NavigationControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import style from './Map.module.css'

const MapBox = () => {

    //testing  ---------------------------------------------------------------------------------------------------------------
    const markersArray = [
        <Marker
            longitude={30.31428}
            latitude={50.272796}
            onClick={() => { console.log('you clicked on me!') }}
            key={1111111111111111}
        />,
        <Marker
            longitude={30.51428}
            latitude={50.472342}
            onClick={() => { console.log('you clicked on me!') }}
            key={11111111111111112}
        />,
    ]
    //testing -------------------------------------------------------------------------------------



    return (
        <div className={style.content_map}>
            <Map
                mapboxAccessToken={process.env.REACT_APP_MAP_GL_TOKEN}
                initialViewState={{
                    longitude: 30.31428,
                    latitude: 50.27279,
                    zoom: 2,
                }}
                projection='globe'
                mapStyle="mapbox://styles/zeroarty/cl5znwb9v000q15pnr1uxzjmm"
            >
                <GeolocateControl
                    positionOptions={{ enableHighAccuracy: true }}
                    trackUserLocation={true}
                />
                <NavigationControl />
                {markersArray}
            </Map>
        </div>
    )
}

export default MapBox;