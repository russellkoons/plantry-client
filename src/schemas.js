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

export const MealSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  ingredients: Yup.array().of(Yup.string().required('Required')),
  times: Yup.object().shape({
    Breakfast: Yup.boolean(),
    Lunch: Yup.boolean(),
    Dinner: Yup.boolean()
  }).test(
    'timesTest',
    null,
    (obj) => {
      if ( obj.Breakfast || obj.Lunch || obj.Dinner ) {
        return true;
      }

      return new Yup.ValidationError(
        'Please check at least one meal time',
        null,
        'times'
      );
    }
  )
});

export const PlanSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  SundayBreakfast: Yup.string().required('Required'),
  SundayLunch: Yup.string().required('Required'),
  SundayDinner: Yup.string().required('Required'),
  MondayBreakfast: Yup.string().required('Required'),
  MondayLunch: Yup.string().required('Required'),
  MondayDinner: Yup.string().required('Required'),
  TuesdayBreakfast: Yup.string().required('Required'),
  TuesdayLunch: Yup.string().required('Required'),
  TuesdayDinner: Yup.string().required('Required'),
  WednesdayBreakfast: Yup.string().required('Required'),
  WednesdayLunch: Yup.string().required('Required'),
  WednesdayDinner: Yup.string().required('Required'),
  ThursdayBreakfast: Yup.string().required('Required'),
  ThursdayLunch: Yup.string().required('Required'),
  ThursdayDinner: Yup.string().required('Required'),
  FridayBreakfast: Yup.string().required('Required'),
  FridayLunch: Yup.string().required('Required'),
  FridayDinner: Yup.string().required('Required'),
  SaturdayBreakfast: Yup.string().required('Required'),
  SaturdayLunch: Yup.string().required('Required'),
  SaturdayDinner: Yup.string().required('Required')
})