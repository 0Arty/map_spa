import React from 'react';
import styles from './Header.module.scss'
import { useAppDispatch } from '../../../store/root'
import { openFilters, openHelp, openContacts, openInfo, closeAllWindows } from '../../../store/slices/headerSlice';

const Header = () => {
    const dispatch = useAppDispatch()

    return (
        <div className={styles.header_block}>
            <div className={styles.btns}>
                <ul>
                    <li onClick={(e) => { dispatch(closeAllWindows()) }}>Logo</li>
                    <li onClick={(e) => { dispatch(openFilters()) }}>   Filters     </li>
                    <li onClick={(e) => { dispatch(openHelp()) }}>   Help        </li>
                    <li onClick={(e) => { dispatch(openContacts()) }}>   Contact     </li>
                    <li onClick={(e) => { dispatch(openInfo()) }}>   Info        </li>
                </ul>
            </div>
        </div>
    );
}
export default Header;