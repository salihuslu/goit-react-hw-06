// src/components/ContactForm/ContactForm.jsx
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './ContactForm.module.css';

const ContactSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, 'Too Short')
        .max(50, 'Too Long')
        .required('Required'),
    number: Yup.string()
        .min(3, 'Too Short')
        .max(50, 'Too Long')
        .required('Required'),
});

export default function ContactForm({ onAdd }) {
    const handleSubmit = (values, { resetForm }) => {
        onAdd(values);
        resetForm();
    };

    return (
        <Formik
            initialValues={{ name: '', number: '' }}
            validationSchema={ContactSchema}
            onSubmit={handleSubmit}
        >
            <Form className={styles.form}>
                <label className={styles.label}>
                    Name
                    <Field type="text" name="name" className={styles.input} />
                    <ErrorMessage name="name" component="div" className={styles.error} />
                </label>
                <label className={styles.label}>
                    Number
                    <Field type="text" name="number" className={styles.input} />
                    <ErrorMessage name="number" component="div" className={styles.error} />
                </label>
                <button type="submit" className={styles.button}>
                    Add contact
                </button>
            </Form>
        </Formik>
    );
}
