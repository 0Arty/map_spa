//import components
import style from './App.module.scss'
import Header from './main/header/Header'
import Filters from './main/filters/Filters'
import Help from './main/helpMenu/Help'
import ContactMenu from './main/contactMenu/ContactMenu'
import InformationMenu from './main/informationMenu/InformationMenu'
import MapBox from './map/Map'
// import any libraries 
import { AnimateSharedLayout, motion, AnimatePresence } from 'framer-motion'
import classNames from 'classnames'
//import store
import { useAppSelector } from '../store/root'

const App = () => {
  
  const helpIsOpen = useAppSelector(state => state.headerDetails.helpIsOpen)
  const filtersIsOpen = useAppSelector(state => state.headerDetails.filtersIsOpen)
  const contactIsOpen = useAppSelector(state => state.headerDetails.contactIsOpen)
  const informationIsOpen = useAppSelector(state => state.headerDetails.informationIsOpen)

  const VariantsForAnimation: any = {
    init: { y: -1000, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -1000, opacity: 0, position: 'absolute' },
  }
  return (
    <>
      <div className={style.container}>
        <Header />
        <div className={classNames(style.box, filtersIsOpen || helpIsOpen ||
          contactIsOpen || informationIsOpen ? style.open : style.closed)}>
          <AnimateSharedLayout>

            <AnimatePresence>
              {filtersIsOpen && (<motion.div layout initial={'init'} animate={'animate'}
                exit={'exit'} variants={VariantsForAnimation} transition={{ duration: 0.7 }}
              >
                <Filters />
              </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {helpIsOpen && (<motion.div layout initial={'init'} animate={'animate'}
                exit={'exit'} transition={{ duration: 0.7 }} variants={VariantsForAnimation}
              >
                <Help />
              </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {contactIsOpen && (<motion.div layout initial={'init'} animate={'animate'}
                exit={'exit'} transition={{ duration: 0.7 }} variants={VariantsForAnimation}
              >
                <ContactMenu />
              </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {informationIsOpen && (<motion.div layout initial={'init'} animate={'animate'}
                exit={'exit'} transition={{ duration: 0.7 }} variants={VariantsForAnimation}
              >
                <InformationMenu />
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
