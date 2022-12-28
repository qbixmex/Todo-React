import { FC, ReactElement } from 'react';
import { Box } from '@mui/material';
import { boxStyles } from './task.styles';

export const Task: FC = (): ReactElement => {
  return (
    <Box sx={boxStyles}>
      Task
      {/*// TODO Task Header */}
      {/*// TODO: Task Description */}
      {/*// TODO: Task Footer */}
    </Box>
  );
};