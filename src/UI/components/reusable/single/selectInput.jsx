import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const SelectInput = (props) => {
  const { menuItems, conversionObject, label, disabled } = props;

  return (
    <FormControl variant="filled" fullWidth size="small">
      <InputLabel id="demo-simple-select-filled-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-filled-label"
        id="demo-simple-select-filled"
        disabled={disabled}
        {...props}
      >
        {menuItems.map((item, index) => (
          <MenuItem key={index} value={item}>
            {conversionObject[item]}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
export { SelectInput };
