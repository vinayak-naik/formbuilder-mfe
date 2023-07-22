import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CreateTemplate from '../pages/createTemplate';
import Dashboard from '../pages/dashboard';

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" Component={Dashboard} />
      <Route exact path="/dashboard" Component={Dashboard} />
      <Route exact path="/create-template" Component={CreateTemplate} />
    </Routes>
  );
};
export default AppRoutes;
