import React from 'react';
import style from './FilterGroup.module.scss'
import FilterImages from './filterImages/FilterImages';
import List from './list/List';

interface groupProps {
    establishmentTypes: {
        isOpen: boolean,
        id: string,
        filters: {
            [filter: string]: {
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
        <> 
            <div className={style.filterGroup}>
                <FilterImages />
                <div className={style.filter_name}>
                    {filtersList}
                </div>
            </div>
        
        </>
    );
}

export default FilterGroup;