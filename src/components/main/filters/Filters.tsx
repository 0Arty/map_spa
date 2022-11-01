import style from './Filters.module.scss'
import { useAppSelector } from '../../../store/root';
import FilterHeading from './filterHeading/FilterHeading';
import FilterInput from './filterInput/FilterInput';
import FilterGroup from './filterBody/FilterGroup';


const Filters = () => {
    const establishmentTypes = useAppSelector(state => state.filterDetails.establishmentTypes)

    const establishmentGroups = Object
        .values(establishmentTypes)
        .map(estbType => <FilterGroup
            establishmentTypes={estbType}
            key={estbType.id} />
        )

    return (
        <div className={style.wrapper}>

                <FilterHeading/>
                <FilterInput />
                <div className={style.box}>
                    {establishmentGroups}
                </div>
        </div>

    );
}
export default Filters;