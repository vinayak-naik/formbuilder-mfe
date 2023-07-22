import { useState } from 'react';
import { Formik } from 'formik';
import styles from './updateProfile.module.css';
import { getFormikErrors } from '../../utils';
import {
  BottonBox,
  TextInput,
  TwoColumnInputBox,
} from '../../components/reusable/base/index';
import {
  FormHeaderBox,
  FormikForm,
  SelectAccountType,
  SelectLanguage,
  UpdateProfileSubmitButton,
} from '../../components/updateProfile/updateProfileForm';
import { updateProfileFormSchema } from '../../schema';
import { updateProfileFormInitialValues } from '../../data/initialValues';
// import { updateProfileFormInitialValues } from '../../data/initialValues';

const UpdateProfileForm = (props) => {
  const { loading, onSubmit, user } = props;
  const [action, setAction] = useState(false);

  const userData = {
    firstName: user.firstName,
    lastName: user.lastName,
    username: user.username,
    email: user.email,
    accountType: user.attributes ? user.attributes.accountType[0] : '',
    language: user.attributes ? user.attributes.language[0] : '',
  };

  const onFocus = () => {
    if (!action) console.log(action);
    setAction(true);
  };

  return (
    <Formik
      className={styles.formik}
      initialValues={userData}
      validationSchema={updateProfileFormSchema}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {(formik) => {
        const { firstName, lastName, username, email } = getFormikErrors(
          formik,
          updateProfileFormInitialValues,
        );
        const { getFieldProps } = formik;

        return (
          <FormikForm>
            <FormHeaderBox>User Profile</FormHeaderBox>
            <TwoColumnInputBox>
              <TextInput
                label="firstName"
                {...getFieldProps('firstName')}
                error={firstName}
                onFocus={onFocus}
              />
              <TextInput
                label="lastName"
                {...getFieldProps('lastName')}
                error={lastName}
                onFocus={onFocus}
              />
            </TwoColumnInputBox>

            <TextInput
              label="username"
              {...getFieldProps('username')}
              error={username}
              disabled
            />
            <TextInput
              label="email"
              {...formik.getFieldProps('email')}
              error={email}
              disabled
            />
            <SelectAccountType
              label="Account Type"
              formikProps={formik.getFieldProps('accountType')}
            />
            <SelectLanguage
              label="Language"
              formikProps={formik.getFieldProps('language')}
              onFocus={onFocus}
            />
            <BottonBox right>
              {action && (
                <UpdateProfileSubmitButton>
                  {loading ? 'UPDATING...' : 'UPDATE'}
                </UpdateProfileSubmitButton>
              )}
            </BottonBox>
          </FormikForm>
        );
      }}
    </Formik>
  );
};

export default UpdateProfileForm;
