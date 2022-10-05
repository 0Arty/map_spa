import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import FilterGroup from './filterElement/FilterGroup';
import FilterInput from './filterInput/FilterInput';
import style from './Filters.module.css'

const Filters = () => {


    const [IsOpen, setIsOpen] = useState(true)

    return (
        <>
            <button style={{ width: '20px', height: '15px', position: 'absolute', zIndex: 150 }} onClick={() => {
                setIsOpen(!IsOpen)
            }}>

            </button>
            <AnimatePresence>
                {IsOpen && (
                    <motion.div
                        initial={{ x: -500, opacity: 0.4, }}
                        animate={{ opacity: 1, x: 0, }}
                        exit={{ opacity: 0.4, x: -500, }}
                        transition={{ duration: 0.7 }}
                        className={style.wrapper}
                    >
                        <h1>Filters</h1>
                        <FilterInput />
                        <FilterGroup />
                    </motion.div>
                )}
            </AnimatePresence>

        </>
    );
}
export default Filters;