import React from 'react';
import FilterGroup from './filterElement/FilterGroup';
import FilterInput from './filterInput/FilterInput';
import style from './Filters.module.css'

const Filters = () => {

    return (
        <div className={style.wrapper}>
            <FilterInput />
            <FilterGroup />

        </div>
    );
}
export default Filters;