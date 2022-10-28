import style from './FilterHeading.module.scss'
import { useAppDispatch } from '../../../../store/root'
import { closeFilters } from '../../../../store/slices/headerSlice';

const FilterHeading = () => {

    const dispatch = useAppDispatch()

    return (
        <div className={style.fitler_heading}>
            <h1>Filters</h1>
            <div className={style.btn}
                onClick={() => dispatch(closeFilters())}>
                X
            </div>
        </div>
    );
}
export default FilterHeading;