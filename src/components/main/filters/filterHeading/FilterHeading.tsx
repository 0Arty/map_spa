import React from 'react';
import style from './FilterHeading.module.css'
import { useAppDispatch } from '../../../../store/root'
import { setFiltersIsOpen } from '../../../../store/slices/headerSlice';

const FilterHeading = () => {

    const dispatch = useAppDispatch()

    return (
        <div className={style.fitler_heading}>
            <h1>Filters</h1>
            <div className={style.btn}
                onClick={() => dispatch(setFiltersIsOpen('close'))}>
                X
            </div>
        </div>
    );
}
export default FilterHeading;