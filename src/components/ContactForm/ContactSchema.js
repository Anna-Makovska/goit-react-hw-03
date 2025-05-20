import * as Yup from 'yup';

const ContactSchema = Yup.object().shape({
    username: Yup.string()
        .min(3, 'Min 3 chars')
        .max(50, 'Max 50 chars')
        .required('This is a required field'),
    number: Yup.string()
    .matches(/^\d+$/, 'Number must contain only digits')
    .min(7, 'Number is too short')
    .max(15, 'Number is too long')
    .required('This is a required field'),
})
export default ContactSchema;