import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import FilterGroup from './filterElement/FilterGroup';
import FilterInput from './filterInput/FilterInput';
import style from './Filters.module.css'
import FilterHeading from './filterHeading/FilterHeading';


const Filters = () => {

    return (

        <div className={style.wrapper}>
            <FilterHeading />
            <FilterInput />
            <FilterGroup />
        </div>

    );
}
export default Filters;