import { FC, ReactElement } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import {
  taskCounterStyles,
  avatarStyles,
  subtitleStyles,
} from './taskCounter.styles';

export const TaskCounter: FC = (): ReactElement => {
  return (
    <Box sx={taskCounterStyles}>
      <Avatar sx={avatarStyles}>
        <Typography color="white" variant="h4">10</Typography>
      </Avatar>
      <Typography sx={subtitleStyles} variant="h5">
        Subtitle
      </Typography>
    </Box>
  );
};
