import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import FilterGroup from './filterElement/FilterGroup';
import FilterInput from './filterInput/FilterInput';
import style from './Filters.module.css'
import { useAppSelector } from '../../../store/root'
import FilterHeading from './filterHeading/FilterHeading';


const Filters = () => {


    const filters = useAppSelector(state => state.headerDetails.filtersIsOpen)

    return (
        <AnimatePresence>
            {filters && (
                <motion.div
                    initial={{ x: 0, y: -1000, opacity: 0.4 }}
                    animate={{ opacity: 1, x: 0, y: 0}}
                    exit={{ opacity: 0.4, y: 1000 }}
                    transition={{ duration: 0.8 }}
                    className={style.wrapper}
                >

                    <FilterHeading />
                    <FilterInput />
                    <FilterGroup />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
export default Filters;