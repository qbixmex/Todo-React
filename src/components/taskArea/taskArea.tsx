import { FC, ReactElement } from 'react';
import {
  Grid, Box, Typography, Alert,
  AlertTitle, LinearProgress
} from '@mui/material';
import { format } from 'date-fns';
import { taskCountersStyles, tasksStyles } from './taskArea.styles';
import { TaskCounter, Task } from '../../components';
import { Status } from '../createTaskForm/enums/Status';
import { useQuery } from 'react-query';
import { sendApiRequest } from '../../helpers/sendApiRequest';
import { ITaskApi } from './interfaces/ITaskApi';

export const TaskArea: FC = (): ReactElement => {
  const { error, isLoading, data, refetch } = useQuery(
    'tasks',
    async () => {
      return await sendApiRequest<ITaskApi[]>(
        'http://localhost:4000/api/tasks',
        'GET',
      );
    }
  );

  return (
    <Grid item xs={12} md={8} px={4}>
      <Box mb={8} px={4}>
        <Typography my={2}>
          Status of your tasks as on{' '}
          {format(new Date(), 'PPPP')}
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
          <>
          {error && (
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              There was an error fetching your tasks
            </Alert>
          )}
          {(!error && (Array.isArray(data)) && data.length === 0) && (
            <Alert severity="warning">
              <AlertTitle>Warning</AlertTitle>
              You do not have any tasks created yet.<br />
              Start by creating some tasks!
            </Alert>
          )}
          {isLoading
            ? (<LinearProgress />)
            : (
              Array.isArray(data)
              && (data.length > 0)
              && data?.map((task, index) => {
                return (task.status !== Status.completed) ? (
                  <Task
                    key={task.id + index}
                    id={task.id}
                    title={task.title}
                    date={new Date(task.date)}
                    description={task.description}
                    priority={task.priority}
                    status={task.status}
                  />
                ): (false);
              })
          )}
          </>
        </Grid>
      </Grid>
    </Grid>
  );
};
