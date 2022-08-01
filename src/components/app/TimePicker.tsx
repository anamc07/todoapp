import React, { useState } from 'react';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { Stack, TextField, TextFieldProps } from '@mui/material';

const TimePickerMUI = ({}: any) => {
  const [value, setValue] = React.useState<Date | null>(
    new Date('2014-08-18T21:11:54'),
  );

  const handleChange = (newValue: Date | null) => {
    setValue(newValue);
  };

  return (
    <Stack>
      <TimePicker
        label="Time"
        value={value}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} />}
      />
    </Stack>
  );
};

export default TimePickerMUI;
