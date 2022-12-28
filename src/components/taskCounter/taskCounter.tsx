import { FC, ReactElement } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import {
  taskCounterStyles,
  avatarStyles,
  subtitleStyles,
} from './taskCounter.styles';
import { ITaskCounter } from './interfaces/ITaskCounter';
import { Status } from '../createTaskForm/enums/Status';

export const TaskCounter: FC<ITaskCounter> = ({
  status = Status.completed,
  count = 0,
}): ReactElement => {
  return (
    <Box sx={taskCounterStyles}>
      <Avatar sx={avatarStyles}>
        <Typography color="white" variant="h4">
          {count}
        </Typography>
      </Avatar>
      <Typography sx={subtitleStyles} variant="h5">
        {status}
      </Typography>
    </Box>
  );
};
