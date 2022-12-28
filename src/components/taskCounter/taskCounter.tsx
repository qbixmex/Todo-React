import { FC, ReactElement } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import {
  taskCounterStyles,
  avatarStyles,
  subtitleStyles,
} from './taskCounter.styles';
import { ITaskCounter } from './interfaces/ITaskCounter';
import { Status } from '../createTaskForm/enums/Status';
import { emitCorrectBorderColor } from './helpers/emitCorrectBorderColor';
import { emitCorrectLabel } from './helpers/emitCorrectLabel';
import PropTypes from 'prop-types';

export const TaskCounter: FC<ITaskCounter> = ({
  status = Status.completed,
  count = 0,
}): ReactElement => {
  avatarStyles.borderColor = `${emitCorrectBorderColor(status)}`;
  return (
    <Box sx={taskCounterStyles}>
      <Avatar sx={avatarStyles}>
        <Typography color="white" variant="h4">
          {count}
        </Typography>
      </Avatar>
      <Typography sx={subtitleStyles} variant="h5">
        {emitCorrectLabel(status)}
      </Typography>
    </Box>
  );
};

TaskCounter.propTypes = {
  status: PropTypes.oneOf([
    Status.todo,
    Status.inProgress,
    Status.completed,
  ]),
  count: PropTypes.number,
};
