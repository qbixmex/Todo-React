import { FC, ReactElement } from 'react';
import { TextField } from '@mui/material';
import { ITextField } from './interfaces/ITextField';
import PropTypes from 'prop-types';

export const TaskDescriptionField: FC<ITextField> = ({
  disabled = false,
  value = '',
  onChange = (e) => console.log(e),
}): ReactElement => {
  return (
    <TextField
      id="description"
      name="description"
      label="Description"
      variant="outlined"
      size="small"
      multiline
      rows={4}
      fullWidth
      disabled={disabled}
      onChange={onChange}
      value={value}
    />
  );
};

TaskDescriptionField.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};