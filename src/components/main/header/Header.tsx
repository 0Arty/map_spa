import React from 'react';
import styles from './Header.module.css'
import { useAppDispatch, useAppSelector } from '../../../store/root'
import {setFilterIsOpen} from '../../../store/filter/details'


const Header = () => {

    //@ts-ignore
    const dispatch = useAppDispatch()
    //@ts-ignore
    const openFilter = () => {

    }

    return (
        <div className={styles.header_block}>
            <div className={styles.btns}>
                <ul>
                    <li>Logo</li>
                    <li onClick={openFilter}>Filters</li>
                    <li>Help</li>
                    <li>Contact</li>
                    <li>Info</li>
                </ul>
            </div>
        </div>
    );
}
export default Header;