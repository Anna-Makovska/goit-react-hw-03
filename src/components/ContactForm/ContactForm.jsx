import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import s from "../ContactForm/ContactForm.module.css";
import ContactSchema from "./ContactSchema";

const ContactForm = ({onSubmit}) => {
    const fieldId = useId();


  const handleSubmit = (values, helpers) =>
  {
    onSubmit(values);
    helpers.resetForm();

  }
  
    return (
      <Formik
        initialValues={{
          username: '',
          number: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={ContactSchema}
      >
        <Form className={s.form}>
          <div className={s.wrapper}>
            <label htmlFor={`${fieldId}-username`} className={s.label}>
              Name
            </label>
            <Field
              className={s.inputUp}
              type='text'
              name='username'
              id={`${fieldId}-username`}
            ></Field>

            <ErrorMessage
              name='username'
              component='span'
              className={s.error}
              style={{ display: 'block' , color: 'red', marginBottom: '10px' }}
            />
          </div>
          <div className={s.wrapper}>
            <label htmlFor={`${fieldId}-number`} className={s.label}>
              Number
            </label>

            <Field
              className={s.inputDown}
              type='tel'
              name='number'
              id={`${fieldId}-number`}
            ></Field>
            <ErrorMessage
              className={s.error}
              name='number'
              component='span'
              style={{ color: 'red' }}
            />
          </div>
          <button className={s.button} type='submit'>
            Add contact
          </button>
        </Form>
      </Formik>
    );
}
export default ContactForm;