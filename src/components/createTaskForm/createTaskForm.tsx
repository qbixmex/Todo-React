import { FC, ReactElement, useState } from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { boxStyles } from './createTaskStyles';
import {
  TaskTitleField,
  TaskDescriptionField,
  TaskDateField,
  TaskSelectField,
} from './';
import { Status } from './enums/Status';
import { Priority } from './enums/Priority';

export const CreateTaskForm: FC = (): ReactElement => {
  const [title, setTitle] = useState<string|undefined>(undefined);
  const [description, setDescription] = useState<string|undefined>(undefined);
  const [date, setDate] = useState<Date|null>(new Date());
  const [status, setStatus] = useState<string>(Status.todo);
  const [priority, setPriority] = useState<string>(Priority.normal);

  return (
    <Box sx={boxStyles}>
      <Typography mb={2} component='h2' variant='h6'>
        Create A Task
      </Typography>
      <Stack sx={{ width: '100%' }} spacing={2}>
        <TaskTitleField />
        <TaskDescriptionField />
        <TaskDateField />
        <Stack
          sx={{ width: '100%' }}
          direction='row'
          spacing={2}
        >
          <TaskSelectField
            label="status"
            name="status"
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
      </Stack>      
    </Box>
  );
};