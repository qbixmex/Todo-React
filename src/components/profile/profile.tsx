import { FC, ReactElement } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import { boxStyles, avatarStyles } from './profile.styles';
import PropTypes from 'prop-types';

interface IProfile {
  name?: string;
}

export const Profile: FC<IProfile> = (props): ReactElement => {
  const { name = 'John'} = props;
  return (
    <Box sx={boxStyles}>
      <Avatar sx={avatarStyles}>
        <Typography variant='h4' color='text.primary'>
          { `${name.substring(0, 1)}` }
        </Typography>
      </Avatar>
      <Typography variant='h6' color='text.primary'>
        Welcome, { name }
      </Typography>
      <Typography variant='body1' color='text.primary'>
        This is your personal task manager
      </Typography>
    </Box>
  );
};

Profile.propTypes = {
  name: PropTypes.string,
};
