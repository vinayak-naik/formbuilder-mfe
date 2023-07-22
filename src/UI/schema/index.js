import * as yup from 'yup';

const signupSchema = yup.object({
  username: yup.string().required('Please enter username'),
  email: yup
    .string()
    .email('Field should contain a valid email')
    .max(255)
    .required('Please enter email'),
  password: yup.string().required('Please enter password'),
});

const loginFormSchema = yup.object({
  email: yup
    .string()
    .email('Field should contain a valid email')
    .max(255)
    .required('Please enter email'),
  password: yup.string().required('Please enter password'),
});
const updateProfileFormSchema = yup.object({
  username: yup.string().required('Please enter username'),
  email: yup
    .string()
    .email('Field should contain a valid email')
    .max(255)
    .required('Please enter email'),
  firstName: yup.string().required('Please enter firstName'),
  lastName: yup.string().required('Please enter lastName'),
});

export { signupSchema, loginFormSchema, updateProfileFormSchema };
