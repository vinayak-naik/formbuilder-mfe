import { Container, Paper } from '@mui/material';
import React from 'react';
import styles from './updateProfile.module.css';

const UpdateProfileContainer = (props) => {
  const { children } = props;
  return (
    <Container maxWidth="md" id={styles.updateProfileContainer}>
      {children}
    </Container>
  );
};
const UpdateProfileFormBox = (props) => {
  const { children } = props;
  return <Paper id={styles.updateProfileFormBox}>{children}</Paper>;
};

export { UpdateProfileContainer, UpdateProfileFormBox };
