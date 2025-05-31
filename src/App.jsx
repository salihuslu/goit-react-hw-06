import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import styles from './App.module.css'

export default function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <div className={styles.listname}><ContactForm /></div>
      <div className={styles.searchname}><SearchBox /></div>
      <ContactList />
    </div>
  );
}
