import { nanoid } from "nanoid";
import styles from './ContactForm.module.css';
import { Formik, Form, Field,ErrorMessage } from 'formik'
import * as yup from 'yup';
import "yup-phone";
import PropTypes from 'prop-types';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().phone().required()
})
 
const ContactForm = ({onAddContact}) => {
  const numberId = nanoid();
  const nameId = nanoid();

  const initialValues = {
    name: '', number: ''
  }
  const hendleSumbmit = (values, {resetForm}) => {
    onAddContact({ id: nanoid(), ...values });
    resetForm();
  }

  return (
    <Formik initialValues={initialValues} validationSchema={schema} onSubmit={hendleSumbmit}>
      <Form className={styles.form}>
        <label htmlFor={nameId}>Name</label>
          <Field
            id={nameId}
            type="text"
            name="name"
          />
        <ErrorMessage className={styles.errorMessage} name="name"component='div'/>
        <label className={styles.phoneLabel} htmlFor={numberId}>Telephone</label>
          <Field
            id={numberId}
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          />
        <ErrorMessage className={styles.errorMessage} name="number" component='div'/>
        <button className={styles.btnSubmit}type="submit">Add contact</button>
      </Form>
    </Formik>
  )
}

ContactForm.propTypes = {
   onAddContact:PropTypes.func.isRequired 
}
export default ContactForm;