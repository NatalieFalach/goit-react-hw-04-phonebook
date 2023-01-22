import PropTypes from 'prop-types';
import styles from './ContactList.module.css'

const ContactList = ({ contacts, onRemoveContact }) => {
  return (
    <ul>
      {
        contacts.map(item => {
          return <li className={styles.item} key={item.id}>{item.name}: {item.number}
            <button className={styles.btnDelete} onClick={() => onRemoveContact(item.id)}>Delete</button></li> 
        })
      }
    </ul>
    
  )
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onRemoveContact: PropTypes.func.isRequired
}

export default ContactList;

