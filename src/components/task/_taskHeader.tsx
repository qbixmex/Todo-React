import { FC } from 'react';
import { Box, Chip, Typography } from '@mui/material';
import { boxStyles } from './_taskHeader.styles';
import { ITaskHeader } from './interfaces/ITaskHeader';
import { format } from 'date-fns';

import PropTypes from 'prop-types';

export const TaskHeader: FC<ITaskHeader> = ({
  title = 'Task Title',
  date = new Date('1970-01-02'),
}): JSX.Element => {
  return (
    <Box sx={boxStyles}>
      <Box>
        <Typography variant="h6">{title}</Typography>
      </Box>
      <Box>
      <Chip
        variant="outlined"
        label={format(date, 'PPP')}
      />
      </Box>
    </Box>
  );
};

TaskHeader.propTypes = {
  title: PropTypes.string,
  date: PropTypes.instanceOf(Date),
};
