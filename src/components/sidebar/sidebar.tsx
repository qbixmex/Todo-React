import { FC, ReactElement } from 'react';
import { sidebarStyles } from '../../pages/dashboard/dashboard.styles';
import { Grid } from '@mui/material';

export const Sidebar: FC = (): ReactElement => {
  return (
    <Grid item md={4} sx={sidebarStyles}>
      <h2>Sidebar Area</h2>
    </Grid>
  );
};
