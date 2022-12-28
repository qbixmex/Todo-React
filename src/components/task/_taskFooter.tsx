import { FC } from 'react';
import { Box, Button, Switch, FormControlLabel } from '@mui/material';
import { ITaskFooter } from './interfaces/ITaskFooter';
import { boxStyles } from './_taskFooter.styles';
import PropTypes from 'prop-types';

export const TaskFooter: FC<ITaskFooter> = ({
  onClick = (e) => console.log(e),
  onStatusChange = (e) => console.log(e),
}): JSX.Element => {
  return (
    <Box sx={boxStyles}>
      <FormControlLabel
        label="In Progress"
        control={
        <Switch
          color="warning"
          onChange={onStatusChange}
        />
      }
      />
      <Button
        variant="contained"
        color="success"
        size="small"
        sx={{ color: 'white' }}
        onClick={onClick}
      >Mark Complete</Button>
    </Box>
  );
};

TaskFooter.propTypes = {
  onStatusChange: PropTypes.func,
  onClick: PropTypes.func,
};
