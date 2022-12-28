import { FC, ReactElement } from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { boxStyles } from './createTaskStyles';
import {
  TaskTitleField,
  TaskDescriptionField,
  TaskDateField,
} from './';

export const CreateTaskForm: FC = (): ReactElement => {
  return (
    <Box sx={boxStyles}>
      <Typography mb={2} component='h2' variant='h6'>
        Create A Task
      </Typography>
      <Stack sx={{ width: '100%' }} spacing={2}>
        <TaskTitleField disabled={true} />
        <TaskDescriptionField />
        <TaskDateField />
      </Stack>
      {/* Task Status */}
      {/* Task Priority */}
    </Box>
  );
};