import React from 'react';
import style from './List.module.scss'

interface ListInterface {
    filterName : string
} 


const List = ({filterName} : ListInterface) => {
    return (
        <div className={style.list}>
            <div className={style.container}>
                <input type='checkbox' className={style.checkbox} />
            </div>

            <span>{filterName}</span>
        </div>
    );
}
export default List;