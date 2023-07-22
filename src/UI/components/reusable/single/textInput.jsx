import { TextField } from '@mui/material';

const TextInput = (props) => {
  const { error } = props;
  return (
    <TextField
      fullWidth
      size="small"
      variant="filled"
      inputProps={{ style: { fontSize: 14 } }}
      {...props}
      helperText={error}
      error={Boolean(error)}
    />
  );
};
export { TextInput };
