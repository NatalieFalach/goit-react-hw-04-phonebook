import PropTypes from 'prop-types';
import styles from './Filter.module.css'

const Filter = ({ onFilterChange, filterValue }) => {
  return (
    <>
      <p className={styles.p}>Find contacts by name</p>
      <input className={styles.inputText} type="text" onChange={onFilterChange} value={filterValue} />
    </>
  )
}

Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  filterValue: PropTypes.string.isRequired
}

export default Filter;