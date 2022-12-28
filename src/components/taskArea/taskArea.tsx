import { FC, ReactElement } from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { format } from 'date-fns';
import { taskCountersStyles, tasksStyles } from './taskArea.styles';
import { TaskCounter, Task } from '../../components';
import { Status } from '../createTaskForm/enums/Status';

export const TaskArea: FC = (): ReactElement => {
  return (
    <Grid item xs={12} md={8} px={4}>
      <Box mb={8} px={4}>
        <Typography my={2}>
          Status of your tasks as on{' '}
          { format(new Date(), 'PPPP') }
        </Typography>
      </Box>
      <Grid
        container
        display="flex"
        justifyContent="center"
      >
        <Grid item xs={12} md={10} sx={taskCountersStyles}>
          <TaskCounter count={10} status={Status.todo} />
          <TaskCounter count={2} status={Status.inProgress} />
          <TaskCounter count={4} status={Status.completed} />
        </Grid>
        <Grid item xs={10} md={8} sx={tasksStyles}>
          <Task />
          <Task />
          <Task />
        </Grid>
      </Grid>
    </Grid>
  );
};
