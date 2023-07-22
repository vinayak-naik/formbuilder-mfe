import React from 'react';
import { useTheme } from '@mui/material/styles';
import AppRoutes from '../UI/routes';
import { AppContainer } from '../UI/components/reusable/layout/appContainer';

export const Main = (props) => {
  const { isAuthenticated } = props;
  useTheme();

  return (
    <AppContainer>
      <AppRoutes isAuthenticated={isAuthenticated} />
    </AppContainer>
  );
};
