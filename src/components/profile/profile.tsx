import { FC, ReactElement } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import { boxStyles, avatarStyles } from './profile.styles';

export const Profile: FC = (): ReactElement => {
  return (
    <Box sx={boxStyles}>
      <Avatar sx={avatarStyles}>
        <Typography variant='h4' color='text.primary'>
          J
        </Typography>
      </Avatar>
      <Typography variant='h6' color='text.primary'>
        Welcome, John
      </Typography>
      <Typography variant='body1' color='text.primary'>
        This is your personal task manager
      </Typography>
    </Box>
  );
};
