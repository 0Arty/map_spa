import classNames from 'classnames';
import React from 'react';
import style from './FilterGroup.module.scss'
import List from './list/List';

interface groupProps {
    establishmentTypes: {
        isOpen: boolean,
        id: string,
        filters: {
            filter1: {
                name: string,
                onChecked: boolean
                id: number
            },
        }
    }
}

const FilterGroup = ({ establishmentTypes }: groupProps) => {

    const filtersList = Object
        .values(establishmentTypes.filters)
        .map(estbType => <List filterName={estbType.name} key={estbType.id}/>)

    return (
        <> {establishmentTypes.isOpen && (
            <div className={style.filterGroup}>
                <div className={style.box}>
                    <div className={classNames(style.element, style.element_1)}></div>
                    <div className={classNames(style.element, style.element_2)}></div>
                </div>
                <div className={style.filter_name}>
                    {filtersList}
                </div>
            </div>
        )}
        </>
    );
}

export default FilterGroup;