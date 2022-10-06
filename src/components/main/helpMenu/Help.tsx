import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { useAppSelector } from '../../../store/root';
import style from './Help.module.css'

const Help = () => {

    const helpWindowIsOpen = useAppSelector(state => state.headerDetails.helpIsOpen)


    return (

        <AnimatePresence>
            {helpWindowIsOpen && (
                <motion.div
                    initial={{ x: 0, y: -1000, opacity: 0.4 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    exit={{ opacity: 0.4, y: 1000 }}
                    transition={{ duration: 0.8 }}
                    className={style.help_container}
                >
                </motion.div>
            )}
        </AnimatePresence>
    );
}
export default Help;