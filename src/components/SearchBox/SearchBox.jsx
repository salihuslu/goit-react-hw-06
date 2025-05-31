import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import styles from './SearchBox.module.css';

export default function SearchBox() {
    const dispatch = useDispatch();
    const filter = useSelector(selectNameFilter);

    return (
        <div className={styles.searchBox}>
            <label>
                Find contacts by name
                <input
                    type="text"
                    value={filter}
                    onChange={e => dispatch(changeFilter(e.target.value))}
                    className={styles.input}
                />
            </label>
        </div>

    );
}
