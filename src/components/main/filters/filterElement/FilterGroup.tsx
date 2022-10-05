import classNames from 'classnames';
import React from 'react';
import style from './FilterGroup.module.css'
import List from './list/List';

const FilterGroup = () => {
    return (
        <div className={style.filterGroup}>
            <div className={style.box}>
                <div className={classNames(style.element, style.element_1)}></div>
                <div className={classNames(style.element, style.element_2)}></div>
            </div>
            <div className={style.filter_name}>
                <List filterName={'filter 1'} />
                <List filterName={'filter 1'} />
                <List filterName={'filter 1'} />
                <List filterName={'filter 1'} />
                <List filterName={'filter 1'} />
                <List filterName={'filter 1'} />
                <List filterName={'filter 1'} />

            </div>
        </div>

    );
}

export default FilterGroup;