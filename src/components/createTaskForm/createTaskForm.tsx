import { FC, ReactElement, useState } from 'react';
import {
  Box, Typography, Stack, LinearProgress,
  Button, Alert, AlertTitle,
} from '@mui/material';
import { boxStyles } from './createTaskStyles';
import {
  TaskTitleField,
  TaskDescriptionField,
  TaskDateField,
  TaskSelectField,
} from './';
import { Status } from './enums/Status';
import { Priority } from './enums/Priority';
import { useMutation } from 'react-query';
import { sendApiRequest } from '../../helpers/sendApiRequest';
import { ICreateTask } from '../taskArea/interfaces/ICreateTask';

export const CreateTaskForm: FC = (): ReactElement => {
  const [title, setTitle] = useState<string|undefined>(undefined);
  const [description, setDescription] = useState<string|undefined>(undefined);
  const [date, setDate] = useState<Date|null>(new Date());
  const [status, setStatus] = useState<string>(Status.todo);
  const [priority, setPriority] = useState<string>(Priority.normal);

  //* Create Task Mutation
  const createTaskMutation = useMutation(
    (data: ICreateTask) =>
      sendApiRequest(
        'http://localhost:4000/api/tasks',
        'POST',
        data,
      )
  );

  const createTaskHandler = () => {
    if (!title || !date || !description) {
      return;
    }

    const task: ICreateTask = {
      title,
      description,
      date: date.toString(),
      status,
      priority,
    };

    createTaskMutation.mutate(task);
  };

  return (
    <Box sx={boxStyles}>
      <Alert
        severity='success'
        sx={{ width: '100%', marginBottom: 2 }}
      >
        <AlertTitle>Success</AlertTitle>
        The task has been created successfully
      </Alert>
      <Typography mb={2} component='h2' variant='h6'>
        Create A Task
      </Typography>
      <Stack sx={{ width: '100%' }} spacing={2}>
        <TaskTitleField
          onChange={(e) => setTitle(e.target.value)}
          disabled={createTaskMutation.isLoading}
        />
        <TaskDescriptionField
          onChange={(e) => setDescription(e.target.value)}
          disabled={createTaskMutation.isLoading}
        />
        <TaskDateField
          value={date}
          onChange={(date) => setDate(date)}
          disabled={createTaskMutation.isLoading}
        />
        <Stack
          sx={{ width: '100%' }}
          direction='row'
          spacing={2}
        >
          <TaskSelectField
            label="status"
            name="status"
            value={status}
            onChange={(e) => setStatus(e.target.value as string)}
            disabled={createTaskMutation.isLoading}
            items={[
              {
                value: Status.todo,
                label: Status.todo.toLocaleUpperCase(),
              },
              {
                value: Status.inProgress,
                label: Status.inProgress.toLocaleUpperCase(),
              }
            ]}
          />
          <TaskSelectField
            label="priority"
            name="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value as string)}
            disabled={createTaskMutation.isLoading}
            items={[
              {
                value: Priority.low,
                label: Priority.low.toLocaleUpperCase(),
              },
              {
                value: Priority.normal,
                label: Priority.normal.toLocaleUpperCase(),
              },
              {
                value: Priority.high,
                label: Priority.high.toLocaleUpperCase(),
              }
            ]}
          />
        </Stack>
        {createTaskMutation.isLoading && <LinearProgress />}
        <Button          
          variant='contained'
          size='large'
          fullWidth
          onClick={createTaskHandler}
          disabled={
            !title ||
            !description ||
            !date ||
            !status ||
            !priority
          }
        >Create Task</Button>
      </Stack>
    </Box>
  );
};