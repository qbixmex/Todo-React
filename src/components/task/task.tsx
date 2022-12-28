import { FC, ReactElement } from 'react';
import { Box } from '@mui/material';
import { boxStyles } from './task.styles';
import { TaskHeader } from './_taskHeader';

export const Task: FC = (): ReactElement => {
  return (
    <Box sx={boxStyles}>
      <TaskHeader />
      {/*// TODO: Task Description */}
      {/*// TODO: Task Footer */}
    </Box>
  );
};