import styles from './Contact.module.css';

export default function Contact({ contact, onDelete }) {
    return (
        <div className={styles.contactItem}>
            <div className={styles.contactText}>
                <span className={styles.name}>{contact.name}</span>
                <span className={styles.number}>{contact.number}</span>
            </div>
            <button
                className={styles.deleteButton}
                onClick={() => onDelete(contact.id)}
            >
                Delete
            </button>
        </div>
    );
}
