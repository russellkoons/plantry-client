import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .required('Required'),
  password: Yup.string()
    .required('Required')
});

export const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Username too short!')
    .max(16, 'Username too long!')
    .required('Required'),
  password: Yup.string()
    .min(6, 'Password too short!')
    .max(70, 'Password too long!')
    .required('Required')
});