import { FC, ReactElement } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ISelectField } from './interfaces/ISelectField';
import { SelectChangeEvent } from '@mui/material';
import PropTypes from 'prop-types';


export const TaskSelectField: FC<ISelectField> = ({
  name = 'Select Box',
  label = 'select box',
  value = '',
  onChange = (e: SelectChangeEvent) => console.log(e),
  items = [{ value: '', label: 'Item' }],
  disabled = false,
}): ReactElement => {
  return (
    <FormControl fullWidth size="small">
      <InputLabel id={`${name}-id`}>{label}</InputLabel>
      <Select
        labelId="status"
        id={`${name}-id-select`}
        label="Status"
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
      >
        {
          items.map((item, index) => (
            <MenuItem key={`${item.label}-${index + 1}`} value={item.value}>
              {item.label}
            </MenuItem>
          ))
        }
      </Select>
    </FormControl>
  );
};

TaskSelectField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }).isRequired,
  ),
  disabled: PropTypes.bool,
};
