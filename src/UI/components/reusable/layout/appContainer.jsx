import { Container } from '@mui/material';
import React from 'react';

const AppContainer = (props) => {
  const { children, w } = props;
  return (
    <Container maxWidth={w} sx={{ height: '100vh' }}>
      {children}
    </Container>
  );
};

export { AppContainer };
