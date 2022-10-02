import React, { useEffect, useRef, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { useAppDispatch, useAppSelector } from '../store/root'
import { setLatitude, setLongitude, setMarkers } from '../store/map/details'

mapboxgl.accessToken = process.env.REACT_APP_MAP_GL_TOKEN!
const durationFlyTo = 8 //8000
const Map = () => {
  // @ts-ignore
  const { dispatch } = useAppDispatch()
  // @ts-ignore
  const { longitude, latitude, filters, markers, institution, search } = useAppSelector(state => state.mapDetails)
  const mapContainer = useRef(null)
  const map = useRef(null)
  const [isZoomed, setIsZoomed] = useState(false)
  const [zoom, setZoom] = useState(0)
  const [mapHeight, SetmapHeight] = useState(300)
  const [info, setInfo] = useState({})
  const [isOpen, setIsOpen] = useState(false)
  
  useEffect(() => {
    
    const allinst = []
    Object.values(filters).map((filter) => {
      if (filter.institution) {
        allinst.push(...filter.institution)
        
      }
    })
    disetInstitution(allinst)
  }, [])
  
  useEffect(() => {
    if (map.current) return
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/zeroarty/cl59t83y3002o14pmqqss59rx',
      center: [longitude, longitude],
      zoom: zoom,
      pitch: 20,
    })
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right')
  }, [])
  
  useEffect(() => {
    if (!map.current) return
    // @ts-ignore
    map.current.on('move', () => {
      // @ts-ignore
      dispatch(setLongitude(map.current.getCenter().longitude.toFixed(4)))
      // @ts-ignore
      dispatch(setLatitude(map.current.getCenter().longitude.toFixed(4)))
      // @ts-ignore
      setZoom(map.current.getZoom().toFixed(2))
    })
  }, [])
  
  useEffect(() => {
    if (!map.current) return
    const flyToPromise = new Promise((resolve) => {
      setTimeout(() => {
        map.current.flyTo({
          center: [30.523333, 50.45446],
          zoom: 9,
          duration: durationFlyTo,
        })
      }, 3) // 3000
      
      setTimeout(() => resolve(true), durationFlyTo)
    })
    flyToPromise.then((value) => setIsZoomed(value))
  }, [])
  
  useEffect(() => { // remove old markers, setting new markers when filters updates
    if (!map.current) return
    
    if (isZoomed) {
      const newMarkers = []
      
      markers.map((marker) => marker.remove()) //delete all markers
      const institutions = Object.values(filters).map((filter) => {
        if (filter.isSelected) return filter.institution
      }).filter(item => !!item).flat(1)  // getting institutions of selected filters
      
      institutions.map((item) => {
        // const popup = new mapboxgl.Popup({ offset: 25 })
        
        const marker = new mapboxgl.Marker({
          clickTolerance: '20px',
        }).setLngLat(item.coordinates)
          .addTo(map.current)
        marker.getElement().addEventListener('click', () => {
          setIsOpen(true)
          setInfo(item)
        })
        newMarkers.push(marker)
      })                                        //add institutions marker in array
      dispatch(setMarkers(newMarkers))
    }
    //create marker array
  }, [filters, isZoomed])
  
  useEffect(() => { // remove old markers, setting new markers when filters updates
    if (!map.current) return
    
    if (isZoomed) {
      //create marker array
      const newMarkers = []
      
      markers.map((marker) => marker.remove()) //delete all markers
      
      // поиск по названию фильтра
      const institutions = Object.values(filters).map((filter) => {
        let name = filter.name.toLowerCase()
        
        if (name.includes(searchText.toLowerCase())) return filter.institution
      }).filter(item => !!item).flat(1)  // getting institutions search text in input
      
      //поиск по названию заведения
      const filteredInst = allInstitution.map((inst) => {
        let name = inst.name.toLowerCase()
        if (name.includes(searchText.toLowerCase())) return inst
      }).filter(item => !!item).flat(1)
      
      //создание маркеров
      institutions.map((item) => {
        
        const marker = new mapboxgl.Marker({
          clickTolerance: '20px',
        }).setLngLat(item.coordinates)
          .addTo(map.current)
        marker.getElement().addEventListener('click', () => {
          setIsOpen(true)
          setInfo(item)
        })
        newMarkers.push(marker)
      })
      
      filteredInst.map((item) => {
        const marker = new mapboxgl.Marker({
          clickTolerance: '20px',
        }).setLngLat(item.coordinates)
          .addTo(map.current)
        marker.getElement().addEventListener('click', () => {
          setIsOpen(true)
          setInfo(item)
        })
        newMarkers.push(marker)
      })
      dispatch(setMarkers(newMarkers))
    }
  }, [searchText, isZoomed])
  
  // useEffect(() => {
  //   SetmapHeight(mapContainer.current.getBoundingClientRect().height)
  // }, [mapContainer])
  
  return (
    <div>
      <div ref={mapContainer}>
        {/*<Popup info={info} mapHeight={mapHeight} isOpen={isOpen} setIsOpen={setIsOpen} />*/}
      </div>
    </div>
  )
}

export default Map
