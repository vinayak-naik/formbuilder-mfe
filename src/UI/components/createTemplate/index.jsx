import { Container } from '@mui/material';
import React from 'react';

import styles from './createTemplate.module.css';

const CreateTemplateContainer = (props) => {
  const { children } = props;
  return <Container id={styles.createTemplateContainer}>{children}</Container>;
};

export { CreateTemplateContainer };
