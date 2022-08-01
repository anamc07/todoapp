import React, { useState } from 'react';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { Stack, TextField, TextFieldProps } from '@mui/material';

const DatePicker = ({}: any) => {
  const date = new Date().toDateString();
  const [selectedDate, setSelectedDate] = useState<
    Date | null | number | string
  >(date);

  const handleChange = (newValue: Date | null) => {
    setSelectedDate(newValue);
  };

  return (
    <Stack
      sx={{
        '& .MuiFormLabel-root': {
          left: '37px',
        },
      }}
    >
      <DesktopDatePicker
        label="Date"
        inputFormat="MM/dd/yyyy"
        value={selectedDate}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} />}
      />
    </Stack>
  );
};

export default DatePicker;
