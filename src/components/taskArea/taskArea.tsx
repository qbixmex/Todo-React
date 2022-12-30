import React, { FC, ReactElement, useContext, useEffect } from 'react';
import { TaskStatusChangedContext } from '../../context';
import {
  Grid, Box, Typography, Alert, AlertTitle, LinearProgress,
} from '@mui/material';
import { format } from 'date-fns';
import { taskCountersStyles, tasksStyles } from './taskArea.styles';
import { TaskCounter, Task } from '../../components';
import { Status } from '../createTaskForm/enums/Status';
import { useQuery, useMutation } from 'react-query';
import { sendApiRequest } from '../../helpers/sendApiRequest';
import { ITaskApi } from './interfaces/ITaskApi';
import { IUpdateTask } from '../createTaskForm/interfaces/IUpdateTask';
import { countTask } from './helpers/countTasks';

export const TaskArea: FC = (): ReactElement => {
  //* Context
  const { updated, toggle } = useContext(TaskStatusChangedContext);

  //* Query Task API
  const { error, isLoading, data, refetch } = useQuery(
    'tasks',
    async () => {
      return await sendApiRequest<ITaskApi[]>(
        'http://localhost:4000/api/tasks',
        'GET',
      );
    }
  );

  //* Update task mutation
  const updateTaskMutation = useMutation(
    (data: IUpdateTask) => (
      sendApiRequest(
        'http://localhost:4000/api/tasks',
        'PATCH',
        data
      )
    )
  );

  //* Refetch Tasks on create new one
  useEffect(() => {
    refetch();
  }, [updated]);

  //* Update states on switch in progress change
  useEffect(() => {
    if (updateTaskMutation.isSuccess) {
      toggle();
    }
  }, [updateTaskMutation.isSuccess]);

  const onStatusChangeHandler = (
    id: string,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    updateTaskMutation.mutate({
      id,
      status: event.target.checked
        ? Status.inProgress
        : Status.todo,
    })
  };

  const markCompleteHandler = (
    id: string,
    _event: React.MouseEvent<HTMLButtonElement|HTMLAnchorElement>,
  ) => {
    updateTaskMutation.mutate({
      id,
      status: Status.completed,
    })
  };

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
          <TaskCounter
            status={Status.todo}
            count={data ? countTask(data, Status.todo) : 0}
          />
          <TaskCounter
            status={Status.inProgress}
            count={data ? countTask(data, Status.inProgress) : 0}
          />
          <TaskCounter
            status={Status.completed}
            count={data ? countTask(data, Status.completed) : 0}
          />
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
                    onStatusChange={onStatusChangeHandler}
                    onClick={markCompleteHandler}
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
