import React from 'react'
import 'mapbox-gl/dist/mapbox-gl.css'
import MapBox from './map/Map'
import './App.module.scss'
import Header from './main/header/Header'
import Filters from './main/filters/Filters'
import style from './App.module.scss'
import Help from './main/helpMenu/Help'

const App = () => {
  return (
    <>
      <div className={style.container}>
        <Header />
        <Help/>
        <Filters />
      </div>
      <MapBox />
    </>
  );
}

export default App;
