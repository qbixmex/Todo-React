import { FC, ReactElement } from 'react';
import { TextField } from '@mui/material';

export const TaskTitleField: FC = (): ReactElement => {
  return (
    <TextField
      id="title"
      name="title"
      label="Title"
      variant="outlined"
      size="small"
      fullWidth
    />
  );
};