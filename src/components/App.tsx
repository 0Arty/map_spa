import 'mapbox-gl/dist/mapbox-gl.css'
import MapBox from './map/Map'
import './App.module.scss'
import Header from './main/header/Header'
import Filters from './main/filters/Filters'
import style from './App.module.scss'
import Help from './main/helpMenu/Help'
import { AnimateSharedLayout, motion, AnimatePresence } from 'framer-motion'
import { useAppSelector } from '../store/root'

const App = () => {
  const helpIsOpen = useAppSelector(state => state.headerDetails.helpIsOpen)
  const filtersIsOpen = useAppSelector(state => state.headerDetails.filtersIsOpen)

  return (
    <>
      <div className={style.container}>
        <Header />
        <div className={style.box}>
          <AnimateSharedLayout>
            <AnimatePresence>
              {helpIsOpen && (
                <motion.div
                  layout
                  initial={{ y: -1000, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 1000, opacity: 0, position: 'absolute' }}
                  transition={{ duration: 0.7 }}
                >
                  <Help />
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {filtersIsOpen && (<motion.div
                layout
                initial={{ y: -1000, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 1000, opacity: 0, position: 'absolute' }}
                transition={{ duration: 0.7 }}
              >
                <Filters />
              </motion.div>
              )}
            </AnimatePresence>
          </AnimateSharedLayout>
        </div>
      </div>
      <MapBox />
    </>
  );
}

export default App;
