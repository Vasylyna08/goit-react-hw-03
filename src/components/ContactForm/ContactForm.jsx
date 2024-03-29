import css from './ContactForm.module.css';
import * as Yup from 'yup';

import { Formik, Form, Field, ErrorMessage } from 'formik';

const contactsBoxSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short!')
    .max(50, 'Too long!')
    .required('Required!'),
  number: Yup.string()
    .min(3, 'Too short!')
    .max(50, 'Too long!')
    .required('Required!'),
});

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = ({ onAddContact }) => {
  const handleSubmit = (values, actions) => {
    onAddContact(values);
    actions.resetForm();
  };

  return (
    <Formik
      validationSchema={contactsBoxSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Form className={css.contactForm}>
        <label className={css.contactLabel}>
          <span className={css.contactText}>Name</span>
          <Field className={css.contactField} type="text" name="name" />
          <ErrorMessage
            className={css.errorMessage}
            name="name"
            component="span"
          />
        </label>

        <label className={css.contactLabel}>
          <span className={css.contactText}>Number</span>
          <Field className={css.contactField} type="text" name="number" />
          <ErrorMessage
            className={css.errorMessage}
            name="number"
            component="span"
          />
        </label>

        <button className={css.formButton} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
