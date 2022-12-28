import { FC, ReactElement } from 'react';
import { Box, Typography } from '@mui/material';
import { boxStyles } from './createTaskStyles';

export const CreateTaskForm: FC = (): ReactElement => {
  return (
    <Box sx={boxStyles}>
      <Typography mb={2} component='h2' variant='h6'>
        Create A Task
      </Typography>
      {/* Task Title */}
      {/* Task Description */}
      {/* Task Date */}
      {/* Task Status */}
      {/* Task Priority */}
    </Box>
  );
};