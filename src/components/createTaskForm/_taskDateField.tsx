import { FC, ReactElement, useState } from 'react';
import { TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

export const TaskDateField: FC = (): ReactElement => {
  const [date, setDate] = useState<Date | null>(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
        label="Task Date"
        inputFormat='dd/MM/yyyy'
        value={date}
        onChange={(newDate) => setDate(newDate)}
        renderInput={(params) => (
          <TextField {...params} />
        )}
      />
    </LocalizationProvider>
  );
};
