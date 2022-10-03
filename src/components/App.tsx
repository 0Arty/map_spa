import React from 'react'
import 'mapbox-gl/dist/mapbox-gl.css'
import MapBox from './map/map'
import './App.module.scss'
import Header from './header/Header'

const App = () => {
  return (
  <>
    <Header />
    <MapBox />
  </>
  );
}

export default App;
