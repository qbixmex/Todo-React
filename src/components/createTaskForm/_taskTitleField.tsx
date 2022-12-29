import { FC, ReactElement } from 'react';
import { TextField } from '@mui/material';
import { ITextField } from './interfaces/ITextField';
import PropTypes from 'prop-types';

export const TaskTitleField: FC<ITextField> =({
  disabled = false,
  value = '',
  onChange = (e) => console.log(e),
}): ReactElement => {
  return (
    <TextField
      id="title"
      name="title"
      label="Title"
      variant="outlined"
      size="small"
      fullWidth
      disabled={ disabled }
      onChange={ onChange }
      value={value}
    />
  );
};

TaskTitleField.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};