import React from 'react';
import s from './Header.module.css'

const Header = () => {
    return (
        <div className={s.header_block}>
            <div className={s.btns}>
            <ul>
                <li>Logo</li>
                <li>Filters</li>
                <li>Help</li>
                <li>Contact</li>
                <li>Info</li>
            </ul>
            </div>
        </div>
    );
}
export default Header;