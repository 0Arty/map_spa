import FilterGroup from './filterElement/FilterGroup';
import FilterInput from './filterInput/FilterInput';
import style from './Filters.module.css'
import FilterHeading from './filterHeading/FilterHeading';
import { useAppSelector } from '../../../store/root';


const Filters = () => {
    const establishmentTypes = useAppSelector(state => state.filterDetails.establishmentTypes)

    const establishmentGroups = Object
        .values(establishmentTypes)
        .map(estbType => <FilterGroup 
            establishmentTypes={estbType} 
            key={estbType.id}/>)

    return (
        <div className={style.wrapper}>
            <div>
                <FilterHeading />
                <FilterInput />
                {establishmentGroups}
            </div>
        </div>

    );
}
export default Filters;