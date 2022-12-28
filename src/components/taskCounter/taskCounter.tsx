import { FC, ReactElement } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import { taskCounterStyles } from './taskCounter.styles';

export const TaskCounter: FC = (): ReactElement => {
  return (
    <Box sx={taskCounterStyles}>
      <Avatar>
        <Typography>10</Typography>
      </Avatar>
      <Typography>Subtitle</Typography>
    </Box>
  );
};
