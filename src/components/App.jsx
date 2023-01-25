import ContactList from "./ContactList/ContactList"
import Filter from "./Filter/Filter"
import styles from './App.module.css'
import ContactForm from "./ContactForm/ContactForm"
import toast, { Toaster } from 'react-hot-toast';
import { useState } from "react"
import useLocalStorage from "hooks/useLocastorage";




export function App() {
 const [filter, setFilter] = useState('');

 const [contacts, setContacts] = useLocalStorage('contacts', [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
 ])
    
 const onAddContact = (contact) => {
    const name = contact.name.toLowerCase().trim();

    const isExists = contacts.some(item => item.name.toLocaleLowerCase() === name)
    if (isExists) {
      toast.error(`${name} is alredy in contacts`);
    } else {
      setContacts(prevContacts => ([...prevContacts, contact]))
    }
  }

  const onRemoveContact = (id) => {
    setContacts(prevContacts => (prevContacts.filter(item => item.id !== id)))
  }

  const onFilterChange = e => {
    const userSearchString = e.target.value.toLowerCase();
    setFilter(userSearchString) 
  }

  const getFilteredConstacts = () => {
     return contacts.filter(({name}) => {
        return name.toLowerCase().includes(filter)
    })
  }

  return (
    <div className={styles.wrapper}>
        <h1 className={styles.phonebook}>Phonebook</h1>
        <ContactForm onAddContact={onAddContact} />

        <h2 className={styles.contacts}>Contacts</h2>
        <Filter onFilterChange={onFilterChange} filterValue={filter} />
        <ContactList contacts={getFilteredConstacts()} onRemoveContact={onRemoveContact} />
        <Toaster position="top-right" />
    </div>
  )
}







