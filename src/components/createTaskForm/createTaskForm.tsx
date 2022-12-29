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

export const CreateTaskForm: FC = (): ReactElement => {
  const [title, setTitle] = useState<string|undefined>(undefined);
  const [description, setDescription] = useState<string|undefined>(undefined);
  const [date, setDate] = useState<Date|null>(new Date());
  const [status, setStatus] = useState<string>(Status.todo);
  const [priority, setPriority] = useState<string>(Priority.normal);

  //* Create Task Mutation
  const createTaskMutation = useMutation((data) =>
    sendApiRequest(
      'http://localhost:4000/api/tasks',
      'POST',
      data,
    )
  );

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
        />
        <TaskDescriptionField
          onChange={(e) => setDescription(e.target.value)}
        />
        <TaskDateField
          value={date}
          onChange={(date) => setDate(date)}
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
        {/* <LinearProgress /> */}
        <Button
          variant='contained'
          size='large'
        >Create Task</Button>
      </Stack>
    </Box>
  );
};