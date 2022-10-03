import Map, { GeolocateControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MapBox = () => {

    
    // const s = require('./map.module.css')
    return (
        <div style={{width:'100vw', height:'100vh'}}>
            <Map
                mapboxAccessToken={process.env.REACT_APP_MAP_GL_TOKEN}
                initialViewState={{
                    longitude: -100,
                    latitude: 40,
                    zoom: 1,  
                }}
                projection='globe'
                mapStyle="mapbox://styles/zeroarty/cl5znwb9v000q15pnr1uxzjmm"
            >
                <GeolocateControl
                    positionOptions={{ enableHighAccuracy: true }}
                    trackUserLocation={true}
                />
            </Map>

        </div>
    )
}

export default MapBox;