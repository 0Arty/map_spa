import React from 'react';
import style from './FilterImages.module.scss'
import classNames from 'classnames';
const FilterImages = () => {
    return (
        <div className={style.box}>
            <div className={classNames(style.element, style.element_1)}></div>
            <div className={classNames(style.element, style.element_2)}></div>
        </div>
    );
}
export default FilterImages;