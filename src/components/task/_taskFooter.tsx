import { FC } from 'react';
import { Box, Button, Switch, FormControlLabel } from '@mui/material';
import { ITaskFooter } from './interfaces/ITaskFooter';
import { boxStyles } from './_taskFooter.styles';
// import PropTypes from 'prop-types';

export const TaskFooter: FC<ITaskFooter> = (): JSX.Element => {
  return (
    <Box sx={boxStyles}>
      <FormControlLabel
        label="In Progress"
        control={<Switch color="error" />}
      />
      <Button
        variant="contained"
        color="success"
        size="small"
        sx={{ color: 'white' }}
      >Mark Complete</Button>
    </Box>
  );
};

// TaskFooter.propTypes = {
//   something: PropTypes.string,
// };
