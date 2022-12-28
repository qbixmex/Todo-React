import { FC, ReactElement } from 'react';
import { sidebarStyles } from '../../pages/dashboard/dashboard.styles';
import { Grid } from '@mui/material';
import { Profile, CreateTaskForm } from '../';

export const Sidebar: FC = (): ReactElement => {
  return (
    <Grid item xs={12} md={4} sx={sidebarStyles}>
      <Profile name='Miles Morales' />
      <CreateTaskForm />
    </Grid>
  );
};
