import { FC, ReactElement } from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { format } from 'date-fns';
import { taskCountersStyles, tasksStyles } from './taskArea.styles';
import { TaskCounter } from '../../components';

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
          <TaskCounter />
          <TaskCounter />
          <TaskCounter />
        </Grid>
        <Grid item xs={10} md={8} sx={tasksStyles}>
          <Box>Tasks Will come over here</Box>
        </Grid>
      </Grid>
    </Grid>
  );
};
