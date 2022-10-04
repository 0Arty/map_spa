import React from 'react'
import 'mapbox-gl/dist/mapbox-gl.css'
import MapBox from './map/Map'
import './App.module.scss'
import Header from './main/header/Header'
import Filters from './main/filters/Filters'

const App = () => {
  return (
  <>
    <Header />
    
    <Filters />
    <MapBox />
  </>
  );
}

export default App;
