import FilterGroup from './filterElement/FilterGroup';
import FilterInput from './filterInput/FilterInput';
import style from './Filters.module.scss'
import FilterHeading from './filterHeading/FilterHeading';
import { useAppSelector } from '../../../store/root';


const Filters = () => {
    const establishmentTypes = useAppSelector(state => state.filterDetails.establishmentTypes)

    const establishmentGroups = Object
        .values(establishmentTypes)
        .map(estbType => <FilterGroup
            establishmentTypes={estbType}
            key={estbType.id} />)

    return (
        <div className={style.wrapper}>
            <div>
                <FilterHeading />
                <FilterInput />
                <div className={style.box}>
                    {establishmentGroups}
                </div>
            </div>
        </div>

    );
}
export default Filters;