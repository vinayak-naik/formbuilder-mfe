import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const dashboard = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>dashboard</div>
      <Button variant="outlined" onClick={() => navigate('/create-template')}>
        Create Template
      </Button>
    </div>
  );
};

export default dashboard;
