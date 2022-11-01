import classNames from 'classnames';
import React from 'react';
import style2 from './FilterInput.module.scss'

const FilterInput = () => {
    return (
        <div className={classNames(style2.form__group, style2.field)}>
            <input type="input" className={style2.form__field} placeholder="Name" name="name" id='name' required />
            <label htmlFor='name' className={style2.form__label}>Search</label>
        </div>
    );

    
}
export default FilterInput;