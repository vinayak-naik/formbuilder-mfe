import React from 'react';
import { Alert, Snackbar } from '@mui/material';

function SnackbarComponent(props) {
  const { snackbar, setSnackbar } = props;

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setSnackbar({});
  };

  if (!snackbar.message) return null;

  return (
    <Snackbar
      open={Boolean(snackbar.message)}
      autoHideDuration={1500}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <Alert
        onClose={handleClose}
        severity="success"
        variant="filled"
        sx={{ width: '100%' }}
      >
        {snackbar.message}
      </Alert>
    </Snackbar>
  );
}

export { SnackbarComponent };
