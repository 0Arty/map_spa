import React from 'react';
import styles from './Header.module.css'
import { useAppDispatch, useAppSelector } from '../../../store/root'
import { closeAllWindows, setContactIsOpen, setFiltersIsOpen, setHelpIsOpen, setInformationIsOpen } from '../../../store/slices/headerSlice';
import classNames from 'classnames';

const Header = () => {
    const dispatch = useAppDispatch()

    return (
        <div className={styles.header_block}>
            <div className={styles.btns}>
                <ul>
                    <li onClick={(e) => { dispatch(closeAllWindows(null)) }}>Logo</li>
                    <li onClick={(e) => { dispatch(setFiltersIsOpen('open')) }}>   Filters     </li>
                    <li onClick={(e) => { dispatch(setHelpIsOpen('open')) }}>   Help        </li>
                    <li onClick={(e) => { dispatch(setContactIsOpen('open')) }}>   Contact     </li>
                    <li onClick={(e) => { dispatch(setInformationIsOpen('open')) }}>   Info        </li>
                </ul>
            </div>
        </div>
    );
}
export default Header;