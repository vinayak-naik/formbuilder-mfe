import React from 'react';
import { Form } from 'formik';
import styles from './updateProfile.module.css';
import { SelectInput } from '../reusable/base';

const FormikForm = (props) => {
  const { children } = props;
  return <Form className={styles.formBox}>{children}</Form>;
};
const FormHeaderBox = (props) => {
  const { children } = props;
  return (
    <div id={styles.formHeaderBox}>
      <h2>{children}</h2>
    </div>
  );
};

const UpdateProfileSubmitButton = (props) => {
  const { children } = props;
  return (
    <button type="submit" id={styles.submitButton}>
      {children}
    </button>
  );
};

const SelectAccountType = (props) => {
  const menuItems = [
    'ACCOUNT_UNSPECIFIED',
    'ACCOUNT_ADMIN',
    'ACCOUNT_ORGANIZATION',
    'ACCOUNT_GUEST',
  ];
  const conversionObject = {
    ACCOUNT_UNSPECIFIED: 'Account Unspecified',
    ACCOUNT_ADMIN: 'Account Admin',
    ACCOUNT_ORGANIZATION: 'Account Organization',
    ACCOUNT_GUEST: 'Account Guest',
  };
  return (
    <SelectInput
      menuItems={menuItems}
      conversionObject={conversionObject}
      disabled
      {...props}
    />
  );
};
const SelectLanguage = (props) => {
  const menuItems = ['en'];
  const conversionObject = {
    en: 'English',
  };
  return (
    <SelectInput
      menuItems={menuItems}
      conversionObject={conversionObject}
      {...props}
    />
  );
};

export {
  FormikForm,
  FormHeaderBox,
  UpdateProfileSubmitButton,
  SelectAccountType,
  SelectLanguage,
};
